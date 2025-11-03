# 🤖 AI Exam Generation Prompt Template

Use this template to generate new certification practice exams. Replace the placeholders with specific certification details.

## Complete AI Prompt

```
I need you to create a comprehensive practice exam for the [CERTIFICATION_NAME] certification. 

### Exam Specifications:
- **Certification Name**: [CERTIFICATION_NAME]
- **Certification Acronym**: [ACRONYM] 
- **Total Questions**: [NUMBER] (typical range: 50-100)
- **Passing Score**: [PERCENTAGE]% 
- **Difficulty Level**: [Beginner/Intermediate/Advanced]

### Topic Areas and Distribution:
[Provide specific topics and approximate number of questions per topic]
Example:
- Topic 1: [TOPIC_NAME] - [NUMBER] questions
- Topic 2: [TOPIC_NAME] - [NUMBER] questions
- Topic 3: [TOPIC_NAME] - [NUMBER] questions

### Question Requirements:
- All questions must be multiple choice with 4 options (A, B, C, D)
- Each question needs a detailed explanation for the correct answer
- Questions should cover practical scenarios, not just theoretical knowledge
- Include both basic and advanced concepts
- Ensure questions test understanding, not just memorization

### Technical Requirements:
- Generate content in JavaScript format compatible with the existing platform
- Use the exact variable naming convention: [acronym]ExamInfo, [acronym]Questions, [acronym]CorrectAnswers
- Include topic mappings for performance analytics
- Follow the existing code structure and formatting

### Content Guidelines:
- Base questions on official documentation and real-world scenarios
- Include hands-on command examples where applicable
- Cover troubleshooting and best practices
- Ensure accuracy and technical correctness
- Add appropriate difficulty progression from basic to advanced
- **IMPORTANT**: Ensure correct answers are evenly distributed across A, B, C, D options
- **AVOID BIAS**: Do not make most correct answers option B - randomize the correct option positions
- **BALANCE CHECK**: Verify that approximately 25% of answers are A, 25% are B, 25% are C, and 25% are D

### Output Format:
Please generate:
1. Exam metadata object
2. Complete questions array with explanations
3. Correct answers mapping
4. Topic mappings for analytics

### Important Disclaimers:
- Include a comment that this content is AI-generated
- Note that questions should be verified against official documentation
- Recommend cross-referencing with authoritative sources
- **CRITICAL**: Verify that correct answers are evenly distributed across all options (A, B, C, D)
- **AVOID ANSWER BIAS**: Ensure approximately equal distribution rather than favoring any single option

Please create the complete exam following the JavaScript template structure used in the existing platform.
```

## 📝 Customization Instructions

### For AI Assistants:
1. Replace all `[PLACEHOLDER]` values with specific certification details
2. Research the certification thoroughly before generating content
3. Follow the existing platform's code structure exactly
4. Include comprehensive explanations for each answer
5. Ensure topic distribution is balanced and realistic
6. **VERIFY ANSWER DISTRIBUTION**: Check that correct answers are evenly spread across A, B, C, D
7. **RANDOMIZE CORRECT OPTIONS**: Avoid clustering most correct answers on option B
8. **BALANCE VALIDATION**: Aim for roughly 25% of questions having each letter as the correct answer

### Example Certifications to Target:
- AWS certifications (Solutions Architect, Developer, SysOps)
- Azure certifications (AZ-900, AZ-104, AZ-204, AZ-305)
- GCP certifications (Associate Cloud Engineer, Professional Cloud Architect)
- CompTIA certifications (Security+, Network+, A+)
- Security certifications (CISSP, CEH, AWS Security Specialty)
- VMware certifications (VCP)
- Cisco certifications (CCNA)
- Project Management (PMP, CompTIA Project+)
- ITIL 4 Foundation

> **Important**: Only target multiple-choice based certifications. Avoid performance-based exams like CKA, CKAD, CKS, Red Hat certifications (RHCSA, RHCE), or hands-on lab-based certifications.

### Quality Standards:
- Questions must be technically accurate
- Explanations should be educational and detailed
- Cover real-world scenarios and best practices
- Include appropriate references to official documentation
- Maintain consistent difficulty progression
- **Answer distribution must be balanced across A, B, C, D options**
- **Avoid answer pattern bias that makes exams predictable**