// Exam Registry - Central registry of all available practice exams
// This file maintains the list of available exams for the multi-exam platform

const examRegistry = {
    'capa-v1.0': {
        id: 'capa-v1.0',
        name: 'CAPA - Certified Argo Project Associate',
        description: 'Practice exam for the Certified Argo Project Associate certification covering Argo CD, Argo Workflows, Argo Events, and Argo Rollouts.',
        file: 'exams/capa-exam-v1.0.js',
        version: '1.0',
        totalQuestions: 100,
        practiceQuestionsNote: '100 practice questions in this platform',
        passingScore: 75,
        topics: ['Argo CD', 'Argo Workflows', 'Argo Events', 'Argo Rollouts', 'GitOps Fundamentals', 'Kubernetes Integration'],
        difficulty: 'Intermediate to Advanced',
        lastUpdated: '2025-11-02'
    },
    'cgoa-v1.0': {
        id: 'cgoa-v1.0',
        name: 'CGOA - Certified GitOps Associate',
        description: 'Practice exam for the Certified GitOps Associate certification covering GitOps principles, practices, tools, and implementation strategies.',
        file: 'exams/cgoa-exam-v1.0.js',
        version: '1.0',
        totalQuestions: 50,
        practiceQuestionsNote: '50 practice questions in this platform',
        passingScore: 75,
        topics: ['GitOps Fundamentals', 'Git & Version Control', 'CI/CD Integration', 'GitOps Tools', 'Security & Compliance', 'Monitoring & Observability'],
        difficulty: 'Intermediate',
        lastUpdated: '2025-11-02'
    },
    'ddf-v1.0': {
        id: 'ddf-v1.0',
        name: 'DDF - Datadog Fundamentals',
        description: 'Comprehensive practice exam for Datadog Fundamentals covering core computing concepts, Agent setup, integrations, data collection, troubleshooting, visualization, and monitor fundamentals.',
        file: 'exams/ddf-exam-v1.0.js',
        version: '1.0',
        totalQuestions: 75,
        practiceQuestionsNote: '75 practice questions in this platform',
        passingScore: 70,
        topics: ['Essential Concepts', 'Agent Installation & Configuration', 'Networking & Data Collection', 'Troubleshooting Datadog', 'Data Visualization & Utilization', 'Monitors, Alerts & API Access'],
        difficulty: 'Beginner to Intermediate',
        lastUpdated: '2026-02-26'
    }
};

// Helper functions for exam registry management
function getAvailableExams() {
    return Object.values(examRegistry);
}

function getExamById(examId) {
    return examRegistry[examId] || null;
}

function getExamsByDifficulty(difficulty) {
    return Object.values(examRegistry).filter(exam => 
        exam.difficulty.toLowerCase().includes(difficulty.toLowerCase())
    );
}

function getExamsByTopic(topic) {
    return Object.values(examRegistry).filter(exam => 
        exam.topics.some(examTopic => 
            examTopic.toLowerCase().includes(topic.toLowerCase())
        )
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        examRegistry, 
        getAvailableExams, 
        getExamById, 
        getExamsByDifficulty, 
        getExamsByTopic 
    };
}

// Make registry globally accessible for dynamic loading
window.examRegistry = examRegistry;
window.getAvailableExams = getAvailableExams;
window.getExamById = getExamById;
window.getExamsByDifficulty = getExamsByDifficulty;
window.getExamsByTopic = getExamsByTopic;