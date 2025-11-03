// Exam Practice Application - Exam Functions
// Handles question loading, answering, scoring, and reporting

function answerQuestion(questionId, selectedAnswer) {
    app.userAnswers[questionId] = selectedAnswer;
    
    // Auto-save progress
    app.saveProgress();
    
    // Show answer and explanation for this question
    const answerSection = document.getElementById(`answer${questionId}`);
    const explanationSection = document.getElementById(`explanation${questionId}`);
    
    if (answerSection) answerSection.classList.add('show');
    if (explanationSection) explanationSection.classList.add('show');
    
    // Add visual feedback to the selected option
    const questionDiv = document.querySelector(`input[name="q${questionId}"]:checked`).closest('.question');
    const labels = questionDiv.querySelectorAll('.options label');
    const correctAnswer = window.correctAnswers[questionId];
    
    labels.forEach((label, index) => {
        const optionLetter = String.fromCharCode(65 + index);
        label.classList.remove('correct', 'incorrect');
        
        if (optionLetter === correctAnswer) {
            label.classList.add('correct');
        }
        if (optionLetter === selectedAnswer && selectedAnswer !== correctAnswer) {
            label.classList.add('incorrect');
        }
    });
    
    // Update question status
    const statusElement = questionDiv.querySelector('.question-status');
    if (statusElement) {
        statusElement.textContent = '✅ Answered';
        statusElement.className = 'question-status answered';
    }
    
    // Update overall score
    updateScore();
}

function loadQuestions() {
    if (!window.questions) {
        console.error('Questions not loaded');
        return;
    }

    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    // Get filtered questions based on current filter
    let filteredQuestions = getFilteredQuestions();
    
    // Update the question count display
    updateQuestionCount(filteredQuestions.length);

    // Calculate which questions to show based on pagination
    const startIndex = (app.currentPage - 1) * app.questionsPerPage;
    const endIndex = app.questionsPerPage === app.currentExam.totalQuestions ? 
        filteredQuestions.length : 
        Math.min(startIndex + app.questionsPerPage, filteredQuestions.length);
    const questionsToShow = filteredQuestions.slice(startIndex, endIndex);

    if (questionsToShow.length === 0) {
        container.innerHTML = `
            <div class="no-questions-message">
                <h3>📋 No questions match the current filter</h3>
                <p>${getNoQuestionsMessage()}</p>
                <button class="button" onclick="document.getElementById('questionFilter').value='all'; changeQuestionFilter();">Show All Questions</button>
            </div>
        `;
        return;
    }

    questionsToShow.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.setAttribute('data-question', q.id);
        
        const isFlagged = app.flaggedQuestions.has(q.id);
        const isAnswered = app.userAnswers[q.id];
        
        questionDiv.innerHTML = `
            <div class="question-header">
                <h3>Question ${q.id}</h3>
                <div class="question-controls">
                    <button class="flag-btn" onclick="toggleQuestionFlag(${q.id})" title="${isFlagged ? 'Remove flag' : 'Flag for review'}">
                        ${isFlagged ? '🚩' : '🏁'}
                    </button>
                    <span class="question-status ${isAnswered ? 'answered' : 'unanswered'}">
                        ${isAnswered ? '✅ Answered' : '⭕ Unanswered'}
                    </span>
                </div>
            </div>
            <p><strong>${q.question}</strong></p>
            <div class="options">
                ${q.options.map((option, index) => `
                    <label>
                        <input type="radio" name="q${q.id}" value="${String.fromCharCode(65 + index)}" 
                               onchange="answerQuestion(${q.id}, '${String.fromCharCode(65 + index)}')"
                               ${app.userAnswers[q.id] === String.fromCharCode(65 + index) ? 'checked' : ''}>
                        ${String.fromCharCode(65 + index)}) ${option}
                    </label>
                `).join('')}
            </div>
            <div class="answer-section" id="answer${q.id}" ${app.userAnswers[q.id] ? 'class="show"' : ''}>
                <div class="correct-answer">✅ Correct Answer: ${window.correctAnswers[q.id]}) ${q.answer}</div>
            </div>
            <div class="explanation" id="explanation${q.id}" ${app.userAnswers[q.id] ? 'class="show"' : ''}>
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        container.appendChild(questionDiv);
        
        // Update flag button appearance
        const flagBtn = questionDiv.querySelector('.flag-btn');
        updateFlagButton(flagBtn, isFlagged);
        
        // Restore visual feedback if question was already answered
        if (app.userAnswers[q.id]) {
            const questionElement = questionDiv;
            const labels = questionElement.querySelectorAll('.options label');
            const correctAnswer = window.correctAnswers[q.id];
            const selectedAnswer = app.userAnswers[q.id];
            
            labels.forEach((label, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                if (optionLetter === correctAnswer) {
                    label.classList.add('correct');
                }
                if (optionLetter === selectedAnswer && selectedAnswer !== correctAnswer) {
                    label.classList.add('incorrect');
                }
            });
        }
    });
    
    updatePagination();
}

function getFilteredQuestions() {
    let filtered = window.questions;
    
    switch (app.currentFilter) {
        case 'flagged':
            filtered = window.questions.filter(q => app.flaggedQuestions.has(q.id));
            break;
        case 'unanswered':
            filtered = window.questions.filter(q => !app.userAnswers[q.id]);
            break;
        case 'all':
        default:
            filtered = window.questions;
            break;
    }
    
    return filtered;
}

function updateQuestionCount(filteredCount) {
    const totalQuestions = window.questions.length;
    const filterSelect = document.getElementById('questionFilter');
    const currentFilterText = filterSelect.options[filterSelect.selectedIndex].text;
    
    // Update page info to show filtered count
    const pageInfoElements = document.querySelectorAll('.page-info');
    pageInfoElements.forEach(element => {
        if (app.currentFilter !== 'all') {
            element.style.fontSize = '14px';
            element.innerHTML = `Page ${app.currentPage} of ${app.totalPages}<br><small>Showing ${filteredCount} of ${totalQuestions} questions (${currentFilterText})</small>`;
        } else {
            element.style.fontSize = '';
            element.textContent = `Page ${app.currentPage} of ${app.totalPages}`;
        }
    });
}

function getNoQuestionsMessage() {
    switch (app.currentFilter) {
        case 'flagged':
            return 'You haven\'t flagged any questions yet. Use the flag button (🏁) on questions you want to review later.';
        case 'unanswered':
            return 'Great job! You\'ve answered all questions. Try reviewing your flagged questions or start over to practice again.';
        default:
            return 'No questions available.';
    }
}

function updateScore() {
    if (!window.questions || !window.correctAnswers) return;

    let attempted = 0;
    let correct = 0;
    app.missedQuestions = [];

    // Reset topic scores
    const topicScores = {};
    if (window.topicMappings) {
        Object.keys(window.topicMappings).forEach(topic => {
            topicScores[topic] = { attempted: 0, correct: 0 };
        });
    }

    for (let i = 1; i <= window.questions.length; i++) {
        const checkedRadio = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (checkedRadio) {
            attempted++;
            const selectedAnswer = checkedRadio.value;
            app.userAnswers[i] = selectedAnswer;
            const isCorrect = window.correctAnswers[i] && selectedAnswer === window.correctAnswers[i];
            
            if (isCorrect) {
                correct++;
            } else {
                app.missedQuestions.push({
                    questionNumber: i,
                    selectedAnswer: selectedAnswer,
                    correctAnswer: window.correctAnswers[i]
                });
            }

            // Update topic scores
            if (window.topicMappings) {
                Object.entries(window.topicMappings).forEach(([topic, questionNums]) => {
                    if (questionNums.includes(i)) {
                        topicScores[topic].attempted++;
                        if (isCorrect) topicScores[topic].correct++;
                    }
                });
            }
        }
    }

    // Update display
    const percentage = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const attemptedEl = document.getElementById('attempted');
    const correctEl = document.getElementById('correct');
    const percentageEl = document.getElementById('percentage');
    const statusEl = document.getElementById('status');

    if (attemptedEl) attemptedEl.textContent = attempted;
    if (correctEl) correctEl.textContent = correct;
    if (percentageEl) percentageEl.textContent = percentage + '%';

    // Update status
    let status, emoji;
    if (percentage >= app.currentExam.passingScore) {
        status = "Ready to Pass!";
        emoji = "🎉";
    } else if (percentage >= 60) {
        status = "Almost There!";
        emoji = "📈";
    } else if (percentage >= 40) {
        status = "Keep Practicing";
        emoji = "📚";
    } else {
        status = "Needs More Study";
        emoji = "💪";
    }

    if (statusEl) statusEl.textContent = `${emoji} ${status}`;

    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }

    // Update topic breakdown
    if (window.topicMappings) {
        Object.entries(topicScores).forEach(([topic, scores], index) => {
            const percentage = scores.attempted > 0 ? Math.round((scores.correct / scores.attempted) * 100) : 0;
            let emoji = '📚';
            if (percentage >= 80) emoji = '🎯';
            else if (percentage >= 60) emoji = '📈';
            else if (percentage >= 40) emoji = '⚠️';

            const scoreText = `${scores.correct}/${scores.attempted} (${percentage}%) ${emoji}`;
            const topicElement = document.getElementById(`topic${index + 1}`);
            if (topicElement) topicElement.textContent = scoreText;
        });
    }
}

function showAnswers() {
    document.querySelectorAll('.answer-section').forEach(el => el.classList.add('show'));
    document.querySelectorAll('.explanation').forEach(el => el.classList.add('show'));
}

function hideAnswers() {
    document.querySelectorAll('.answer-section').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.explanation').forEach(el => el.classList.remove('show'));
}

function resetQuiz() {
    // Reset pagination to first page
    app.currentPage = 1;
    
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    
    // Reset visual feedback
    document.querySelectorAll('.options label').forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });
    
    hideAnswers();
    app.userAnswers = {};
    app.missedQuestions = [];
    updateScore();
    
    const summaryReport = document.getElementById('summaryReport');
    const hideSummaryBtn = document.getElementById('hideSummaryBtn');
    
    if (summaryReport) summaryReport.classList.remove('show');
    if (hideSummaryBtn) hideSummaryBtn.classList.remove('show');
    
    // Reload questions to reflect reset state
    loadQuestions();
}

function showSummaryReport() {
    const summaryDiv = document.getElementById('summaryReport');
    if (!summaryDiv) return;
    
    const attempted = document.getElementById('attempted')?.textContent || '0';
    const correct = document.getElementById('correct')?.textContent || '0';
    const percentage = document.getElementById('percentage')?.textContent || '0%';
    const status = document.getElementById('status')?.textContent || 'Unknown';
    
    let summaryHTML = `
        <h3>📊 Comprehensive ${app.currentExam.name} Summary Report</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h4>Overall Performance</h4>
            <p><strong>Total Score:</strong> ${correct}/${app.currentExam.totalQuestions} (${percentage})</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Passing Score:</strong> ${app.currentExam.passingScore}%</p>
        </div>`;
    
    if (app.missedQuestions.length > 0) {
        summaryHTML += `
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <h4>Questions to Review (${app.missedQuestions.length} missed)</h4>
                <ul>`;
        
        app.missedQuestions.forEach(missed => {
            summaryHTML += `<li>Question ${missed.questionNumber}: You answered ${missed.selectedAnswer}, correct answer is ${missed.correctAnswer}</li>`;
        });
        
        summaryHTML += `</ul></div>`;
    } else {
        summaryHTML += `
            <div style="background: #d4edda; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <h4>🎉 Perfect Score!</h4>
                <p>Congratulations! You answered all attempted questions correctly!</p>
            </div>`;
    }
    
    summaryDiv.innerHTML = summaryHTML;
    summaryDiv.classList.add('show');
    
    // Show the hide button
    const hideSummaryBtn = document.getElementById('hideSummaryBtn');
    if (hideSummaryBtn) hideSummaryBtn.classList.add('show');
}

function hideSummaryReport() {
    const summaryDiv = document.getElementById('summaryReport');
    const hideSummaryBtn = document.getElementById('hideSummaryBtn');
    
    if (summaryDiv) summaryDiv.classList.remove('show');
    if (hideSummaryBtn) hideSummaryBtn.classList.remove('show');
}