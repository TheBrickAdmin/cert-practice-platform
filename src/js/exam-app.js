// Exam Practice Application - Main JavaScript
// Handles exam selection, loading, and general functionality

class ExamPracticeApp {
    constructor() {
        this.currentExam = null;
        this.currentPage = 1;
        this.questionsPerPage = 10;
        this.totalPages = 1;
        this.missedQuestions = [];
        this.userAnswers = {};
        this.flaggedQuestions = new Set(); // Track flagged questions
        this.currentFilter = 'all'; // 'all', 'flagged', 'unanswered'
        this.availableExams = [];
    }

    async init() {
        await this.loadAvailableExams();
        this.showExamSelector();
    }

    async loadAvailableExams() {
        try {
            // Use the exam registry to get available exams
            if (typeof examRegistry === 'undefined') {
                throw new Error('Exam registry not loaded');
            }

            console.log('Exam registry loaded successfully');
            const registryExams = getAvailableExams();
            console.log('Registry exams found:', registryExams.length, registryExams.map(e => e.name));
            
            // Don't load exam scripts during initialization to avoid const redeclaration errors
            // Just use the registry data and validate files later when needed
            for (const examMeta of registryExams) {
                try {
                    console.log(`Adding exam from registry: ${examMeta.name}`);
                    
                    // Create exam data from registry metadata only
                    const examData = {
                        ...examMeta,
                        path: examMeta.file
                    };
                    
                    this.availableExams.push(examData);
                    console.log(`Successfully added: ${examMeta.name}`);
                } catch (error) {
                    console.warn(`Failed to add exam: ${examMeta.name}`, error);
                }
            }
            
            if (this.availableExams.length === 0) {
                throw new Error('No exam files could be loaded successfully');
            }
            
            console.log(`Successfully loaded ${this.availableExams.length} exam(s):`, this.availableExams.map(e => e.name));
        } catch (error) {
            console.error('Failed to load available exams:', error);
            this.showLoadingError(error.message);
        }
    }

    showExamSelector() {
        const container = document.getElementById('mainContainer');
        container.innerHTML = `
            <div class="exam-selector">
                <h1>🤖 test.PILOT: Certification Exam Practice</h1>
                <p>Select an exam to start practicing. All exams feature question flagging and progress tracking:</p>
                
                <div class="exam-list">
                    ${this.availableExams.map(exam => `
                        <div class="exam-card" onclick="app.selectExam('${exam.id}')">
                            <h3>${exam.name}</h3>
                            <p>${exam.description}</p>
                            <div class="exam-meta">
                                <strong>📊 ${exam.totalQuestions} questions</strong> • 
                                <strong>⏱️ ${exam.timeLimit} minutes</strong> • 
                                <strong>🎯 ${exam.passingScore}% to pass</strong>
                            </div>
                            <div class="exam-meta">
                                <strong>📈 Difficulty:</strong> ${exam.difficulty} • 
                                <strong>📅 Version:</strong> ${exam.version}
                            </div>
                            <div class="exam-topics">
                                <strong>📚 Topics:</strong> ${exam.topics.join(', ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${this.availableExams.length === 0 ? 
                    '<div style="text-align: center; padding: 20px; background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; margin: 20px;"><h3 style="color: #856404;">⚠️ No Exams Available</h3><p style="color: #856404; font-size: 16px;">No exam files were found in the exams directory. Please check that exam files are properly placed in <code>src/exams/</code></p></div>' : ''
                }
                
                <div class="exam-features">
                    <h3>🚀 Platform Features</h3>
                    <ul>
                        <li>🏁 Flag difficult questions for later review</li>
                        <li>📊 Real-time progress tracking and scoring</li>
                        <li>🔍 Filter questions by status (All/Flagged/Unanswered)</li>
                        <li>📱 Responsive design for all devices</li>
                        <li>📈 Detailed topic-based performance analysis</li>
                        <li>💾 Automatic session state management</li>
                    </ul>
                </div>
            </div>
        `;
    }

    async selectExam(examId) {
        const exam = this.availableExams.find(e => e.id === examId);
        if (!exam) {
            alert('Exam not found!');
            return;
        }

        try {
            // Load the full exam data
            await this.loadFullExamData(exam.path);
            this.currentExam = exam;
            this.resetExamState();
            this.showExamInterface();
        } catch (error) {
            console.error('Failed to load exam:', error);
            
            // Check if this is a file protocol issue
            if (window.location.protocol === 'file:') {
                this.showFileProtocolError();
            } else {
                // This is a different error (server issue, missing file, etc.)
                this.showGenericLoadingError(error.message);
            }
        }
    }

    async loadFullExamData(examPath) {
        return new Promise((resolve, reject) => {
            // Remove ALL existing exam and metadata scripts to prevent const redeclaration
            const existingScripts = document.querySelectorAll('script[data-exam-script], script[id^="metadata-"]');
            existingScripts.forEach(script => {
                console.log('Removing existing script:', script.src || script.id);
                script.remove();
            });
            
            // Clear any existing global exam variables
            delete window.examInfo;
            delete window.questions;
            delete window.correctAnswers; 
            delete window.topicMappings;
            
            // Wait a moment for cleanup to complete
            setTimeout(() => {
                const script = document.createElement('script');
                script.src = examPath;
                script.setAttribute('data-exam-script', 'true');
                
                script.onload = () => {
                    // Give time for the script to execute and set globals
                    setTimeout(() => {
                        // Verify that the required data was loaded
                        if (typeof window.questions === 'undefined' || typeof window.correctAnswers === 'undefined' || 
                            !Array.isArray(window.questions) || window.questions.length === 0) {
                            console.error('Missing or invalid exam data:', {
                                questions: typeof window.questions,
                                correctAnswers: typeof window.correctAnswers,
                                questionsLength: window.questions ? window.questions.length : 'undefined',
                                isArray: Array.isArray(window.questions)
                            });
                            reject(new Error(`Exam data incomplete. Missing questions or answers in ${examPath}`));
                        } else {
                            console.log(`Successfully loaded exam data from ${examPath}. Total questions: ${window.questions.length}`);
                            resolve();
                        }
                    }, 100); // Increased delay for script execution
                };
                
                script.onerror = (event) => {
                    console.error('Script loading error for:', examPath, event);
                    reject(new Error(`Failed to load exam file: ${examPath}. Check that the file exists and is accessible.`));
                };
                
                document.head.appendChild(script);
            }, 50); // Delay before adding new script
        });
    }

    resetExamState() {
        this.currentPage = 1;
        this.questionsPerPage = 10;
        this.userAnswers = {};
        this.missedQuestions = [];
        this.flaggedQuestions = new Set();
        this.currentFilter = 'all';
    }

    showExamInterface() {
        const container = document.getElementById('mainContainer');
        container.innerHTML = `
            <div class="exam-header">
                <button class="button secondary" onclick="app.showExamSelector()">← Back to Exam Selection</button>
                <h1>🚀 ${this.currentExam.name}</h1>
            </div>
            
            <button class="collapsible" onclick="toggleCollapsible(this)">📋 Instructions & Usage Guide</button>
            <div class="collapsible-content">
                <div class="instructions">
                    <ul>
                        <li><strong>Interactive Learning:</strong> Select an answer for each question to immediately see the correct answer and detailed explanation</li>
                        <li><strong>Visual Feedback:</strong> Correct answers are highlighted in green, incorrect selections in red</li>
                        <li><strong>Progress Tracking:</strong> Your score and topic-specific performance update automatically</li>
                        <li><strong>Review Mode:</strong> Use the buttons below to show/hide all answers or generate a comprehensive summary report</li>
                        <li><strong>Target Score:</strong> Aim for ${this.currentExam.passingScore}%+ to pass the actual certification exam</li>
                        <li><strong>Time Limit:</strong> Actual exam has ${this.currentExam.timeLimit} minutes for ${this.currentExam.totalQuestions} questions</li>
                    </ul>
                </div>
            </div>

            <button class="collapsible" onclick="toggleCollapsible(this)">📊 Score Dashboard & Performance Tracking</button>
            <div class="collapsible-content">
                <div class="dashboard">
                    <h2>📈 Your Progress</h2>
                    <div class="score-grid">
                        <div class="score-item">
                            <h3 id="attempted">0</h3>
                            <p>Questions Attempted</p>
                        </div>
                        <div class="score-item">
                            <h3 id="correct">0</h3>
                            <p>Correct Answers</p>
                        </div>
                        <div class="score-item">
                            <h3 id="percentage">0%</h3>
                            <p>Success Rate</p>
                        </div>
                        <div class="score-item">
                            <h3 id="status">📚 Keep Studying</h3>
                            <p>Exam Readiness</p>
                        </div>
                    </div>
                    
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressBar"></div>
                    </div>
                    
                    <button class="button" onclick="showAnswers()">📖 Show All Answers & Explanations</button>
                    <button class="button" onclick="hideAnswers()">🙈 Hide All Answers & Explanations</button>
                    <button class="button" onclick="resetQuiz()">🔄 Reset Quiz</button>
                    <button class="button" onclick="showSummaryReport()">📊 Show Summary Report</button>
                    <button class="button hide-summary-btn" id="hideSummaryBtn" onclick="hideSummaryReport()">❌ Hide Summary Report</button>
                </div>

                <div class="topic-breakdown">
                    <h3>📈 Performance by Topic</h3>
                    <div id="topicBreakdown">
                        <!-- Topic breakdown will be generated based on exam data -->
                    </div>
                </div>
            </div>

            <div class="questions-per-page">
                <label for="questionsPerPage">Questions per page: </label>
                <select id="questionsPerPage" onchange="changeQuestionsPerPage()">
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">All (${this.currentExam.totalQuestions})</option>
                </select>
                
                <label for="questionFilter" style="margin-left: 30px;">Show: </label>
                <select id="questionFilter" onchange="changeQuestionFilter()">
                    <option value="all">All Questions</option>
                    <option value="flagged">Flagged Questions</option>
                    <option value="unanswered">Unanswered Questions</option>
                </select>
                
                <label for="jumpToQuestion" style="margin-left: 30px;">Jump to Question: </label>
                <input type="number" id="jumpToQuestion" min="1" max="${this.currentExam.totalQuestions}" placeholder="1-${this.currentExam.totalQuestions}" 
                       style="width: 60px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                <button onclick="jumpToQuestion()" style="margin-left: 10px; padding: 5px 10px; background: #007acc; color: white; border: none; border-radius: 4px; cursor: pointer;">Go</button>
            </div>

            <div class="pagination" id="paginationTop">
                <button onclick="goToPage(1)" id="firstBtn">First</button>
                <button onclick="previousPage()" id="prevBtn">Previous</button>
                <span class="page-info" id="pageInfo">Page 1 of 1</span>
                <button onclick="nextPage()" id="nextBtn">Next</button>
                <button onclick="goToPage(app.totalPages)" id="lastBtn">Last</button>
            </div>

            <div id="summaryReport" class="summary-report">
                <!-- Summary report will be generated here -->
            </div>

            <div id="questionsContainer">
                <!-- Questions will be loaded here -->
            </div>

            <div class="pagination" id="paginationBottom">
                <button onclick="goToPage(1)" id="firstBtnBottom">First</button>
                <button onclick="previousPage()" id="prevBtnBottom">Previous</button>
                <span class="page-info" id="pageInfoBottom">Page 1 of 1</span>
                <button onclick="nextPage()" id="nextBtnBottom">Next</button>
                <button onclick="goToPage(app.totalPages)" id="lastBtnBottom">Last</button>
            </div>
        `;

        this.setupTopicBreakdown();
        loadQuestions();  // Global function from exam-functions.js
        updateScore();    // Global function from exam-functions.js
        updatePagination(); // Global function defined below
    }

    setupTopicBreakdown() {
        if (!this.currentExam.topics || !window.topicMappings) return;

        const container = document.getElementById('topicBreakdown');
        container.innerHTML = this.currentExam.topics.map((topic, index) => {
            const topicId = `topic${index + 1}`;
            return `
                <div class="topic-item">
                    <span><strong>${topic}</strong></span>
                    <span id="${topicId}">0/0 (0%) 📚</span>
                </div>
            `;
        }).join('');
    }

    showLoadingError(errorMessage) {
        const container = document.getElementById('mainContainer');
        container.innerHTML = `
            <div class="error-container">
                <div class="error-message">
                    <h1>⚠️ Loading Error</h1>
                    <p><strong>Error:</strong> ${errorMessage}</p>
                    <div class="error-details">
                        <h3>🔧 Troubleshooting Steps:</h3>
                        <ol>
                            <li>Check that the exam files exist in the <code>exams/</code> directory</li>
                            <li>Verify the exam files are properly formatted JavaScript</li>
                            <li>Ensure the web server is serving the files correctly</li>
                            <li>Check the browser console for additional error details</li>
                        </ol>
                        <p><strong>Expected file structure:</strong></p>
                        <pre>
src/
├── index.html
├── exams/
│   └── capa-exam-v1.0.js
└── js/
    ├── exam-app.js
    └── exam-functions.js
                        </pre>
                    </div>
                    <button class="button" onclick="location.reload()">🔄 Retry Loading</button>
                </div>
            </div>
        `;
    }

    showFileProtocolError() {
        const container = document.getElementById('mainContainer');
        container.innerHTML = `
            <div class="error-container">
                <div class="error-message">
                    <h1>🚫 File Protocol Restriction</h1>
                    <p><strong>Issue:</strong> The browser's security policy prevents loading JavaScript files when opening <code>index.html</code> directly from your file system.</p>
                    
                    <div class="error-details">
                        <h3>✅ Solution: Use a Local Web Server</h3>
                        <p><strong>Option 1 - Python (Recommended):</strong></p>
                        <div class="command-box">
                            <code>cd src</code><br>
                            <code>python -m http.server 8000</code><br>
                            <span class="command-note">Then open: http://localhost:8000</span>
                        </div>
                        
                        <p><strong>Option 2 - Node.js:</strong></p>
                        <div class="command-box">
                            <code>npx http-server src -p 8000</code><br>
                            <span class="command-note">Then open: http://localhost:8000</span>
                        </div>
                        
                        <p><strong>Option 3 - VS Code Live Server:</strong></p>
                        <ol>
                            <li>Install the "Live Server" extension in VS Code</li>
                            <li>Right-click on <code>index.html</code></li>
                            <li>Select "Open with Live Server"</li>
                        </ol>
                        
                        <p><strong>Option 4 - GitHub Pages:</strong></p>
                        <ol>
                            <li>Push your code to a GitHub repository</li>
                            <li>Enable GitHub Pages in repository settings</li>
                            <li>Access via your GitHub Pages URL</li>
                        </ol>
                    </div>
                    
                    <div class="why-server">
                        <h4>🤔 Why do I need a web server?</h4>
                        <p>Modern browsers block JavaScript files from loading other JavaScript files when using the <code>file://</code> protocol for security reasons. A web server (even running locally) uses the <code>http://</code> protocol, which allows the dynamic loading of exam data files.</p>
                    </div>
                    
                    <button class="button" onclick="app.showExamSelector()">← Back to Exam Selection</button>
                </div>
            </div>
        `;
    }

    showGenericLoadingError(errorMessage) {
        const container = document.getElementById('mainContainer');
        container.innerHTML = `
            <div class="error-container">
                <div class="error-message">
                    <h1>⚠️ Exam Loading Error</h1>
                    <p><strong>Failed to load exam data.</strong></p>
                    
                    <div class="error-details">
                        <h3>🔍 Error Details:</h3>
                        <div class="command-box">
                            <code>${errorMessage || 'Unknown error occurred'}</code>
                        </div>
                        
                        <h3>🔧 Troubleshooting Steps:</h3>
                        <ol>
                            <li><strong>Check browser console</strong> - Press F12 and look for detailed error messages</li>
                            <li><strong>Verify exam file exists</strong> - Ensure <code>exams/capa-exam-v1.0.js</code> is present</li>
                            <li><strong>Check file permissions</strong> - Make sure the web server can read all files</li>
                            <li><strong>Try refreshing</strong> - Sometimes a simple refresh resolves temporary issues</li>
                            <li><strong>Check network</strong> - Ensure your local server is running properly</li>
                        </ol>
                        
                        <h3>🌐 Current Environment:</h3>
                        <ul>
                            <li><strong>Protocol:</strong> ${window.location.protocol}</li>
                            <li><strong>Host:</strong> ${window.location.host}</li>
                            <li><strong>Path:</strong> ${window.location.pathname}</li>
                        </ul>
                        
                        <p><strong>💡 Quick Fix:</strong> Make sure you're using a web server to host the files. See the README for setup instructions.</p>
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <button class="button" onclick="location.reload()">🔄 Retry Loading</button>
                        <button class="button secondary" onclick="app.showExamSelector()">← Back to Exam Selection</button>
                    </div>
                </div>
            </div>
        `;
    }

    // The rest of the functionality will be handled by global functions
    // for compatibility with the existing inline event handlers
}

// Global functions for compatibility with existing HTML event handlers
function toggleCollapsible(element) {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    content.classList.toggle('show');
}

function updatePagination() {
    if (!window.questions) return;
    
    // Calculate total pages based on filtered questions
    const filteredQuestions = getFilteredQuestions();
    app.totalPages = Math.ceil(filteredQuestions.length / app.questionsPerPage);
    
    // Update page info (this will be further updated by updateQuestionCount)
    document.getElementById('pageInfo').textContent = `Page ${app.currentPage} of ${app.totalPages}`;
    document.getElementById('pageInfoBottom').textContent = `Page ${app.currentPage} of ${app.totalPages}`;
    
    // Update button states
    const updateButtons = (suffix = '') => {
        const firstBtn = document.getElementById(`firstBtn${suffix}`);
        const prevBtn = document.getElementById(`prevBtn${suffix}`);
        const nextBtn = document.getElementById(`nextBtn${suffix}`);
        const lastBtn = document.getElementById(`lastBtn${suffix}`);
        
        if (firstBtn) firstBtn.disabled = app.currentPage === 1 || app.totalPages === 0;
        if (prevBtn) prevBtn.disabled = app.currentPage === 1 || app.totalPages === 0;
        if (nextBtn) nextBtn.disabled = app.currentPage === app.totalPages || app.totalPages === 0;
        if (lastBtn) lastBtn.disabled = app.currentPage === app.totalPages || app.totalPages === 0;
    };
    
    updateButtons();
    updateButtons('Bottom');
}

function goToPage(page) {
    if (page >= 1 && page <= app.totalPages) {
        app.currentPage = page;
        loadQuestions();
        updatePagination();
    }
}

function nextPage() {
    if (app.currentPage < app.totalPages) {
        goToPage(app.currentPage + 1);
    }
}

function previousPage() {
    if (app.currentPage > 1) {
        goToPage(app.currentPage - 1);
    }
}

function changeQuestionsPerPage() {
    const select = document.getElementById('questionsPerPage');
    app.questionsPerPage = parseInt(select.value);
    app.currentPage = 1; // Reset to first page
    loadQuestions();
    updatePagination();
}

function changeQuestionFilter() {
    const select = document.getElementById('questionFilter');
    app.currentFilter = select.value;
    app.currentPage = 1; // Reset to first page
    loadQuestions();
    updatePagination();
}

function toggleQuestionFlag(questionId) {
    if (app.flaggedQuestions.has(questionId)) {
        app.flaggedQuestions.delete(questionId);
    } else {
        app.flaggedQuestions.add(questionId);
    }
    
    // Update the flag button appearance
    const flagBtn = document.querySelector(`[data-question="${questionId}"] .flag-btn`);
    if (flagBtn) {
        updateFlagButton(flagBtn, app.flaggedQuestions.has(questionId));
    }
    
    // If currently showing flagged questions and this question was unflagged, reload
    if (app.currentFilter === 'flagged') {
        loadQuestions();
        updatePagination();
    }
}

function updateFlagButton(button, isFlagged) {
    if (isFlagged) {
        button.innerHTML = '🚩';
        button.title = 'Remove flag';
        button.style.color = '#dc3545';
    } else {
        button.innerHTML = '🏁';
        button.title = 'Flag for review';
        button.style.color = '#6c757d';
    }
}

// Helper function also needed in exam-app.js for pagination
function getFilteredQuestions() {
    if (!window.questions) return [];
    
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

function jumpToQuestion() {
    const questionNumber = parseInt(document.getElementById('jumpToQuestion').value);
    if (questionNumber >= 1 && questionNumber <= app.currentExam.totalQuestions) {
        // Calculate which page contains this question
        const targetPage = Math.ceil(questionNumber / app.questionsPerPage);
        goToPage(targetPage);
        
        // Scroll to the question after a brief delay to allow for loading
        setTimeout(() => {
            const questionElement = document.querySelector(`input[name="q${questionNumber}"]`);
            if (questionElement) {
                questionElement.closest('.question').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 100);
    } else {
        alert(`Please enter a question number between 1 and ${app.currentExam.totalQuestions}`);
    }
}

// Additional functions will be loaded from exam-functions.js