# 📝 Registry Update Guide

After generating a new exam file, you must update the exam registry to make it available in the platform.

## Step-by-Step Instructions

### 1. Locate the Registry File
Open: `src/js/exam-registry.js`

### 2. Add Your Exam Entry
Add a new entry to the `examRegistry` object following this template:

```javascript
const examRegistry = {
    // ... existing exams ...
    
    '[exam-id]': {
        id: '[exam-id]',
        name: '[FULL_EXAM_NAME]',
        description: '[BRIEF_DESCRIPTION]',
        file: 'exams/[filename].js',
        totalQuestions: [NUMBER],
        passingScore: [PERCENTAGE],
        timeLimit: [MINUTES],
        topics: [
            '[TOPIC_1]',
            '[TOPIC_2]',
            // ... more topics
        ],
        difficulty: '[DIFFICULTY_LEVEL]',
        version: '[VERSION]',
        lastUpdated: '[DATE]',
        aiGenerated: true  // Important: Mark as AI-generated
    }
};
```

### 3. Real Example
Here's how an AWS Solutions Architect Associate exam entry would look:

```javascript
'saa-v1.0': {
    id: 'saa-v1.0',
    name: 'SAA-C03 - AWS Solutions Architect Associate',
    description: 'Comprehensive practice exam covering AWS architecture design, security, performance optimization, and cost management.',
    file: 'exams/saa-exam-v1.0.js',
    totalQuestions: 65,
    passingScore: 72,
    timeLimit: 130,
    topics: [
        'Design Resilient Architectures',
        'Design High-Performing Architectures',
        'Design Secure Applications and Architectures',
        'Design Cost-Optimized Architectures'
    ],
    difficulty: 'Intermediate',
    version: '1.0',
    lastUpdated: '2025-11-02',
    aiGenerated: true
}
```

## 🔧 Technical Requirements

### File Placement
- Place the exam file in: `src/exams/[acronym]-exam-v[version].js`
- Example: `src/exams/saa-exam-v1.0.js`

### Naming Conventions
- **Exam ID**: `[acronym-lowercase]-v[version]` (e.g., `saa-v1.0`)
- **File name**: `[acronym-lowercase]-exam-v[version].js` (e.g., `saa-exam-v1.0.js`)
- **Registry key**: Same as exam ID

### Required Fields
All fields in the registry entry are required:
- `id`: Unique identifier
- `name`: Display name with acronym
- `description`: Brief description (1-2 sentences)
- `file`: Relative path to exam file
- `totalQuestions`: Total number of questions
- `passingScore`: Passing percentage
- `timeLimit`: Time limit in minutes
- `topics`: Array of topic names
- `difficulty`: Beginner/Intermediate/Advanced
- `version`: Version number
- `lastUpdated`: Date in YYYY-MM-DD format
- `aiGenerated`: Boolean flag (set to true)

## ✅ Verification Steps

After updating the registry:

1. **Save all files**
2. **Start the development server**:
   ```bash
   cd src
   python -m http.server 8000
   ```
3. **Open browser**: http://localhost:8000
4. **Check exam appears** in the exam selection list
5. **Test exam loading** by clicking on it
6. **Verify questions display** correctly
7. **Test answer submission** and scoring

## 🐛 Troubleshooting

### Exam doesn't appear in list
- Check registry syntax (missing commas, brackets)
- Verify exam ID is unique
- Ensure file path is correct

### Exam fails to load
- Check exam file syntax
- Verify global variable exports
- Check browser console for errors
- Ensure exam file path matches registry entry

### Questions don't display
- Verify question array structure
- Check that all questions have required fields
- Ensure answer mapping is correct
- Validate that answers exactly match option text

## 📋 Quality Checklist

Before publishing:
- [ ] Exam appears in selection list
- [ ] All questions load correctly
- [ ] Answer explanations display
- [ ] Scoring works properly
- [ ] Topic breakdown functions
- [ ] Flagging system works
- [ ] No console errors
- [ ] Mobile view looks good
- [ ] AI disclaimer is visible