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
    
    // Update pagination first to ensure app.totalPages is calculated
    updatePagination();
    
    // Add "Finish Exam" button if this is the last page and showing all questions filter
    if (app.currentPage === app.totalPages && app.currentFilter === 'all') {
        const finishButton = document.createElement('div');
        finishButton.className = 'finish-exam-section';
        finishButton.innerHTML = `
            <div class="finish-exam-container">
                <h3>🎯 Ready to Finish?</h3>
                <p>You've reached the end of the exam. Click below to finalize your results and see your comprehensive performance report.</p>
                <button class="button finish-exam-btn" onclick="finishExam()">
                    🏁 Finish Exam & View Results
                </button>
            </div>
        `;
        container.appendChild(finishButton);
    }
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
    try {
        if (!window.questions || !window.correctAnswers) {
            return;
        }

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

        // Count answers across all pages using app.userAnswers
        for (let i = 1; i <= window.questions.length; i++) {
            const selectedAnswer = app.userAnswers[i];
            if (selectedAnswer) {
                attempted++;
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

        // Calculate score based on total questions (unanswered = wrong)
        const totalQuestions = window.questions.length;
        const unanswered = totalQuestions - attempted;
        const percentage = Math.round((correct / totalQuestions) * 100);
        
        const attemptedEl = document.getElementById('attempted');
        const correctEl = document.getElementById('correct');
        const percentageEl = document.getElementById('percentage');
        const statusEl = document.getElementById('status');

        if (attemptedEl) attemptedEl.textContent = attempted;
        if (correctEl) correctEl.textContent = correct;
        if (percentageEl) percentageEl.textContent = percentage + '%';

        // Update status based on total score
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

    } catch (error) {
        console.error('Error in updateScore:', error);
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

function finishExam() {
    // Calculate final statistics
    const totalQuestions = window.questions.length;
    const answeredCount = Object.keys(app.userAnswers).length;
    const unansweredCount = totalQuestions - answeredCount;
    
    let correctCount = 0;
    app.missedQuestions = [];
    
    // Recalculate final results
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = app.userAnswers[i];
        if (selectedAnswer) {
            if (window.correctAnswers[i] && selectedAnswer === window.correctAnswers[i]) {
                correctCount++;
            } else {
                app.missedQuestions.push({
                    questionNumber: i,
                    selectedAnswer: selectedAnswer,
                    correctAnswer: window.correctAnswers[i]
                });
            }
        } else {
            // Count unanswered questions as missed
            app.missedQuestions.push({
                questionNumber: i,
                selectedAnswer: null,
                correctAnswer: window.correctAnswers[i]
            });
        }
    }
    
    // Score is based on total questions (unanswered = wrong)
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = percentage >= app.currentExam.passingScore;
    
    // Create clean, compact results modal
    const modalHTML = `
        <div class="exam-results-modal" id="examResultsModal">
            <div class="modal-content compact">
                <div class="results-header ${passed ? 'passed' : 'failed'}">
                    <h2>${passed ? '🎉 Congratulations!' : '📚 Keep Studying!'}</h2>
                    <h3>${app.currentExam.name} - Final Results</h3>
                </div>
                
                <div class="results-summary compact">
                    <div class="score-grid compact">
                        <div class="score-item large">
                            <h3>${percentage}%</h3>
                            <p>Your Score</p>
                        </div>
                        <div class="score-item">
                            <h3>${correctCount}</h3>
                            <p>Correct</p>
                        </div>
                        <div class="score-item">
                            <h3>${answeredCount - correctCount}</h3>
                            <p>Incorrect</p>
                        </div>
                        <div class="score-item">
                            <h3>${unansweredCount}</h3>
                            <p>Unanswered</p>
                        </div>
                    </div>
                    
                    <div class="pass-status ${passed ? 'passed' : 'failed'}">
                        ${passed ? 
                            `<h4>✅ PASSED</h4><p>You achieved the passing score of ${app.currentExam.passingScore}%!</p>` :
                            `<h4>❌ NOT PASSED</h4><p>You need ${app.currentExam.passingScore}% to pass. Keep studying!</p>`
                        }
                    </div>
                </div>
                
                <div class="results-actions compact">
                    <button class="button primary" onclick="showDetailedResults()">� View Detailed Report</button>
                    <button class="button" onclick="reviewMissedQuestions()">📖 Review Missed Questions</button>
                    <button class="button" onclick="restartExam()">🔄 Restart Exam</button>
                    <button class="button secondary" onclick="closeExamResults()">✖️ Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add click outside to close functionality
    const modal = document.getElementById('examResultsModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeExamResults();
        }
    });
}

function getTopicBreakdownHTML() {
    if (!window.topicMappings) return '';
    
    let topicHTML = '<div class="topic-results"><h4>📊 Performance by Topic</h4>';
    
    Object.entries(window.topicMappings).forEach(([topic, questionNums]) => {
        let attempted = 0;
        let correct = 0;
        
        questionNums.forEach(qNum => {
            if (app.userAnswers[qNum]) {
                attempted++;
                if (window.correctAnswers[qNum] && app.userAnswers[qNum] === window.correctAnswers[qNum]) {
                    correct++;
                }
            }
        });
        
        const percentage = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        let emoji = '📚';
        if (percentage >= 80) emoji = '🎯';
        else if (percentage >= 60) emoji = '📈';
        else if (percentage >= 40) emoji = '⚠️';
        
        topicHTML += `
            <div class="topic-result-item">
                <span class="topic-name">${topic}</span>
                <span class="topic-score">${correct}/${attempted} (${percentage}%) ${emoji}</span>
            </div>
        `;
    });
    
    return topicHTML + '</div>';
}

function closeExamResults() {
    const modal = document.getElementById('examResultsModal');
    if (modal) {
        modal.remove();
    }
    
    // Also close detailed results if open
    const detailedModal = document.getElementById('detailedResultsModal');
    if (detailedModal) {
        detailedModal.remove();
    }
}

function showDetailedResults() {
    // Calculate all statistics
    const totalQuestions = window.questions.length;
    const answeredCount = Object.keys(app.userAnswers).length;
    const unansweredCount = totalQuestions - answeredCount;
    
    let correctCount = 0;
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = app.userAnswers[i];
        if (selectedAnswer && window.correctAnswers[i] && selectedAnswer === window.correctAnswers[i]) {
            correctCount++;
        }
    }
    
    // Score is based on total questions (unanswered = wrong)
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = percentage >= app.currentExam.passingScore;
    
    const detailedHTML = `
        <div class="exam-results-modal detailed" id="detailedResultsModal">
            <div class="modal-content full-page">
                <div class="results-header ${passed ? 'passed' : 'failed'}">
                    <h2>📊 Detailed Exam Report</h2>
                    <h3>${app.currentExam.name}</h3>
                </div>
                
                <div class="detailed-stats">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h3>${percentage}%</h3>
                            <p>Your Final Score</p>
                        </div>
                        <div class="stat-card">
                            <h3>${correctCount}</h3>
                            <p>Correct Answers</p>
                        </div>
                        <div class="stat-card">
                            <h3>${answeredCount - correctCount}</h3>
                            <p>Incorrect Answers</p>
                        </div>
                        <div class="stat-card">
                            <h3>${unansweredCount}</h3>
                            <p>Unanswered Questions</p>
                        </div>
                        <div class="stat-card">
                            <h3>${app.currentExam.passingScore}%</h3>
                            <p>Required to Pass</p>
                        </div>
                    </div>
                    
                    <div class="pass-status ${passed ? 'passed' : 'failed'}">
                        ${passed ? 
                            `<h4>✅ EXAM PASSED</h4><p>Excellent work! You achieved the passing score of ${app.currentExam.passingScore}%!</p>` :
                            `<h4>❌ EXAM NOT PASSED</h4><p>You need ${app.currentExam.passingScore}% to pass. Review your weak areas and try again!</p>`
                        }
                    </div>
                </div>
                
                ${getTopicBreakdownHTML()}
                
                <div class="detailed-actions">
                    <button class="button" onclick="reviewMissedQuestions()">📖 Review Missed Questions</button>
                    <button class="button" onclick="restartExam()">🔄 Restart Exam</button>
                    <button class="button secondary" onclick="closeDetailedResults()">← Back to Summary</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', detailedHTML);
    
    // Add click outside to close functionality
    const modal = document.getElementById('detailedResultsModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDetailedResults();
        }
    });
}

function closeDetailedResults() {
    const modal = document.getElementById('detailedResultsModal');
    if (modal) {
        modal.remove();
    }
}

function reviewMissedQuestions() {
    if (!app.missedQuestions || app.missedQuestions.length === 0) {
        alert('Great job! You didn\'t miss any questions that you answered.');
        return;
    }
    
    // Close any open modals
    closeExamResults();
    closeDetailedResults();
    
    // Create missed questions review page
    const reviewHTML = `
        <div class="exam-results-modal review" id="missedQuestionsModal">
            <div class="modal-content full-page">
                <div class="results-header review">
                    <h2>📖 Questions to Review</h2>
                    <h3>${app.missedQuestions.length} questions need your attention</h3>
                </div>
                
                <div class="missed-questions-list">
                    ${app.missedQuestions.map(missed => {
                        const question = window.questions[missed.questionNumber - 1];
                        
                        // Convert letters to array indices (A=0, B=1, C=2, D=3)
                        const selectedIndex = missed.selectedAnswer ? missed.selectedAnswer.charCodeAt(0) - 65 : -1;
                        const correctIndex = missed.correctAnswer.charCodeAt(0) - 65;
                        
                        // Get the full text for selected and correct answers
                        const selectedAnswerText = missed.selectedAnswer ? (question.options[selectedIndex] || missed.selectedAnswer) : null;
                        const correctAnswerText = question.options[correctIndex] || missed.correctAnswer;
                        
                        return `
                            <div class="missed-question-card">
                                <div class="question-header">
                                    <h4>Question ${missed.questionNumber}</h4>
                                    <span class="result-indicator incorrect">❌ Incorrect</span>
                                </div>
                                <div class="question-text">${question.question}</div>
                                <div class="answer-comparison">
                                    ${missed.selectedAnswer ? `
                                        <div class="your-answer incorrect">
                                            <strong>Your Answer (${missed.selectedAnswer}):</strong> ${selectedAnswerText}
                                        </div>
                                    ` : `
                                        <div class="your-answer incorrect">
                                            <strong>Your Answer:</strong> <em>Not answered</em>
                                        </div>
                                    `}
                                    <div class="correct-answer">
                                        <strong>Correct Answer (${missed.correctAnswer}):</strong> <span class="answer-text">${correctAnswerText}</span>
                                    </div>
                                </div>
                                <div class="question-actions">
                                    <button class="button small" onclick="goToQuestion(${missed.questionNumber})">📍 Go to Question</button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="review-actions">
                    <button class="button primary" onclick="restartExam()">🔄 Restart Exam</button>
                    <button class="button secondary" onclick="closeMissedQuestions()">✖️ Close Review</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', reviewHTML);
    
    // Add click outside to close functionality
    const modal = document.getElementById('missedQuestionsModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMissedQuestions();
        }
    });
}

function closeMissedQuestions() {
    const modal = document.getElementById('missedQuestionsModal');
    if (modal) {
        modal.remove();
    }
}

function goToQuestion(questionNumber) {
    // Close review modal
    closeMissedQuestions();
    
    // Calculate which page the question is on
    const questionsPerPage = app.questionsPerPage;
    const targetPage = Math.ceil(questionNumber / questionsPerPage);
    
    // Go to that page
    app.currentPage = targetPage;
    loadQuestions();
    
    // Scroll to the specific question after a short delay
    setTimeout(() => {
        const questionElement = document.querySelector(`[data-question="${questionNumber}"]`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            questionElement.style.backgroundColor = '#fff3cd';
            setTimeout(() => {
                questionElement.style.backgroundColor = '';
            }, 3000);
        }
    }, 100);
}

function printResults() {
    window.print();
}

function restartExam() {
    if (confirm('Are you sure you want to restart the exam? This will clear all your current answers.')) {
        closeExamResults();
        closeDetailedResults();
        closeMissedQuestions();
        resetQuiz();
    }
}