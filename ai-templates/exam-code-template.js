// [EXAM_NAME] - [CERTIFICATION_FULL_NAME] v[VERSION]
// AI-Generated Content - Verify against official documentation
// Created: [DATE]

const [acronym]ExamInfo = {
    id: '[acronym-lowercase]',
    name: '[CERTIFICATION_ACRONYM] - [CERTIFICATION_FULL_NAME]',
    description: '[BRIEF_DESCRIPTION]',
    totalQuestions: [NUMBER],
    passingScore: [PERCENTAGE],
    timeLimit: [MINUTES],
    topics: [
        '[TOPIC_1]',
        '[TOPIC_2]',
        '[TOPIC_3]',
        // Add more topics as needed
    ],
    difficulty: '[DIFFICULTY_LEVEL]',
    version: '[VERSION]',
    lastUpdated: '[CURRENT_DATE]'
};

const [acronym]TopicMappings = {
    // Maps question numbers to topic indices (0-based)
    // Example: 1-20 = Topic 1 (index 0), 21-35 = Topic 2 (index 1), etc.
    1: 0, 2: 0, 3: 0, // Questions 1-3 map to first topic
    // Continue mapping all questions to topics
};

const [acronym]Questions = [
    {
        id: 1,
        question: "Question text here?",
        options: [
            "Option A text",
            "Option B text", 
            "Option C text",
            "Option D text"
        ],
        answer: "Option B text", // Must match exactly one of the options above
        explanation: "Detailed explanation of why Option B is correct. Include references to official documentation where possible. Explain why other options are incorrect."
    },
    {
        id: 2,
        question: "Second question text here?",
        options: [
            "Another option A",
            "Another option B",
            "Another option C", 
            "Another option D"
        ],
        answer: "Another option C",
        explanation: "Detailed explanation for question 2..."
    }
    // Continue with all questions...
];

const [acronym]CorrectAnswers = {
    // Maps question ID to the letter of the correct answer (A=1st option, B=2nd, C=3rd, D=4th)
    1: 'B', // First question's answer is option B
    2: 'C', // Second question's answer is option C
    // Continue for all questions...
};

// Global exports - DO NOT CHANGE THESE LINES
window.examInfo = [acronym]ExamInfo;
window.questions = [acronym]Questions;
window.correctAnswers = [acronym]CorrectAnswers;
window.topicMappings = [acronym]TopicMappings;

// AI Generation Metadata
window.aiGenerated = {
    platform: 'cert-practice-platform',
    generated: '[CURRENT_DATE]',
    disclaimer: 'This content was generated using AI and should be verified against official documentation'
};

/* 
CUSTOMIZATION INSTRUCTIONS FOR AI:

1. Replace all [PLACEHOLDER] values:
   - [EXAM_NAME]: Short exam name (e.g., "CKA")
   - [CERTIFICATION_FULL_NAME]: Full certification name (e.g., "Certified Kubernetes Administrator")
   - [VERSION]: Version number (e.g., "1.0")
   - [acronym]: Lowercase acronym (e.g., "cka") 
   - [CERTIFICATION_ACRONYM]: Uppercase acronym (e.g., "CKA")
   - [BRIEF_DESCRIPTION]: 1-2 sentence description
   - [NUMBER]: Total number of questions
   - [PERCENTAGE]: Passing score percentage
   - [MINUTES]: Time limit in minutes
   - [DIFFICULTY_LEVEL]: Beginner/Intermediate/Advanced
   - [CURRENT_DATE]: Current date in YYYY-MM-DD format
   - [TOPIC_X]: Topic names for the certification

2. Generate comprehensive questions with:
   - Realistic scenarios
   - Technical accuracy
   - Detailed explanations
   - Proper difficulty distribution

3. Ensure answer mapping is correct:
   - Verify each question ID maps to correct letter in correctAnswers
   - Double-check that answer text exactly matches one option

4. Topic mapping guidelines:
   - Distribute questions evenly across topics
   - Map question numbers to topic array indices (0-based)

5. Quality checks:
   - All questions have 4 options
   - All explanations are educational and accurate
   - Technical commands and concepts are correct
   - References to official docs where applicable

FILE NAMING CONVENTION:
Save as: [acronym-lowercase]-exam-v[version].js
Example: cka-exam-v1.0.js
*/