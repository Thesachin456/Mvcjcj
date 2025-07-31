# Test System Documentation - EduVibe Platform

## Overview
The EduVibe platform includes a comprehensive testing system with interactive quizzes covering multiple subjects and classes. The system provides timed tests with instant feedback and explanations.

## Test Structure

### Timer System
- **Duration**: 20 minutes (1200 seconds) per test
- **Countdown**: Real-time display in MM:SS format
- **Auto-submit**: Test automatically submits when time expires

### Navigation Features
- Previous/Next question navigation
- Submit button appears on last question
- Unattempted questions tracking
- Score display after submission

## Subject Categories

### Mathematics
**Topics Covered:**
- Prime factorization and HCF/LCM
- Quadratic equations
- Polynomials
- Linear equations
- Number theory

**Sample Questions:**
1. "The exponent of 2 in the prime factorization of 144, is"
   - Options: ["4", "5", "6", "3"]
   - Correct Answer: 5 (index 1)

2. "If two positive integers a and b are expressible in the form a = pq² and b = p³q; p, q being prime numbers, then LCM (a, b) is:"
   - Options: ["pq", "p³q³", "p³q²", "p²q²"]
   - Correct Answer: p³q² (index 2)

### Science
**Topics Covered:**
- Chemical reactions and equations
- Acids, bases, and salts
- Light and optics
- Life processes
- Electrolysis

**Sample Questions:**
1. "In electrolysis of water, the volume of gas collected at cathode is:"
   - Options: ["Half of that at anode", "Double of that at anode", "Same as anode", "None"]
   - Correct Answer: Double of that at anode (index 1)

2. "Silver chloride when exposed to sunlight turns:"
   - Options: ["Green", "Grey", "Brown", "Yellow"]
   - Correct Answer: Grey (index 1)

### Social Studies (SST)
**Topics Covered:**
- Development economics
- Resource planning
- Power sharing
- Democracy and governance

**Sample Questions:**
1. "Different persons could have ________ notions of a country's development."
   - Options: ["Different as well as conflicting", "Same", "Indifferent", "None of the above"]
   - Correct Answer: Different as well as conflicting (index 0)

2. "Power sharing helps in:"
   - Options: ["Reducing social conflicts", "Increasing dictatorship", "Promoting division in society", "Ignoring minority interests"]
   - Correct Answer: Reducing social conflicts (index 0)

### AI/IT (Artificial Intelligence & Information Technology)
**Topics Covered:**
- Communication skills
- Stress management
- Self-awareness and motivation
- Technical fundamentals

**Sample Questions:**
1. "Visual communication among the people are dependent on?"
   - Options: ["Signs, symbols and pictures", "Text messages", "Posture", "Body language"]
   - Correct Answer: Signs, symbols and pictures (index 0)

2. "Which one of the following is not a barrier to effective communication?"
   - Options: ["Physical barrier", "Linguistic barrier", "Interpersonal barrier", "Subjective barrier"]
   - Correct Answer: Subjective barrier (index 3)

## Question Types

### 1. Multiple Choice Questions (MCQ)
Standard format with 4 options, single correct answer.

### 2. Image-based Questions
Questions that include images for visual reference:
```javascript
{
  question: "Two polynomials are shows in the figure below.",
  options: ["0", "1", "2", "3"],
  correctAnswer: 4,
  image: "https://dxixtlyravvxx.cloudfront.net/admin_v1/test_management/question_bank_file/173879511_05_25_13_25_16"
}
```

### 3. Pre-formatted Questions
Questions with special formatting using `usePre: true`:
```javascript
{
  usePre: true,
  question: "Match the following:\n\nA) Horizontal Power Sharing   - i) Among different social groups\nB) Vertical Power Sharing     - ii) Between different levels of government",
  options: ["A-iii, B-ii, C-i, D-iv", "A-i, B-iii, C-ii, D-iv"],
  correctAnswer: 1
}
```

### 4. Assertion-Reasoning Questions
Complex questions testing logical reasoning:
```javascript
{
  question: "Assertion (A): Per capita income is not the only criterion for measuring development. Reason (R): Other factors like education, health, and public facilities also play an important role.",
  options: [
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is not the correct explanation of A",
    "A is true, R is false",
    "A is false, R is true"
  ],
  correctAnswer: 1
}
```

## Test Data Structure

### Question Object
```javascript
{
  question: "string",           // Question text
  options: ["string"],          // Array of 4 options
  correctAnswer: number,        // Index of correct answer (0-3)
  explanation: "string",        // Explanation text
  image: "string",             // Optional image URL
  usePre: boolean              // Optional pre-formatted text flag
}
```

### Test Categories
```javascript
const testData = {
  Maths: {
    "Test 1": [questions],
    "Test 2": [questions]
  },
  Science: {
    "Test 1": [questions],
    "Light Test": [questions],
    "Life Processes": [questions],
    "Acid Base & Salt": [questions]
  },
  SST: {
    "Test 1": [questions],
    "Power Sharing": [questions]
  },
  AI: {
    "Test 1": [questions]
  },
  Extra_Test_by_me: {
    "Quadratic Equations": [questions]
  }
}
```

## Scoring System

### Score Calculation
```javascript
const score = questions.reduce((total, question, index) => {
  return total + (selectedAnswers[index] === question.correctAnswer - 1 ? 1 : 0);
}, 0);
```

### Answer States
- **Selected**: User's chosen answer
- **Correct**: Highlighted in green after submission
- **Wrong**: User's incorrect answer highlighted in red
- **Unattempted**: Questions without selected answers

## User Interface Features

### Visual Feedback
- **Selected Option**: Gray background (`#888` border)
- **Correct Answer**: Green background (`#2e7d32`)
- **Wrong Answer**: Red background (`#c62828`)
- **Hover Effects**: Darker background on hover

### Navigation Controls
- **Previous Button**: Navigate to previous question
- **Next Button**: Navigate to next question
- **Submit Button**: Appears on last question
- **Back Button**: Return to subject selection (after completion)

### Progress Tracking
- Question counter: "Question X / Total"
- Time remaining display
- Score display after submission
- Unattempted questions list

## Test Flow

### 1. Subject Selection
User selects from available subjects (Maths, Science, SST, AI).

### 2. Test Selection
User chooses specific test from selected subject.

### 3. Test Execution
- 20-minute timer starts
- Questions displayed one by one
- User can navigate between questions
- Answers are saved in real-time

### 4. Test Submission
- Automatic submission when timer expires
- Manual submission via Submit button
- Immediate score calculation and display

### 5. Results Review
- Score display
- Correct/incorrect answer highlighting
- Explanations for each question
- List of unattempted questions

## Technical Implementation

### State Management
```javascript
const [selectedSubject, setSelectedSubject] = useState(null);
const [selectedTest, setSelectedTest] = useState(null);
const [selectedAnswers, setSelectedAnswers] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
```

### Timer Implementation
```javascript
useEffect(() => {
  let timer;
  if (selectedTest && !isSubmitted) {
    timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }
  return () => clearInterval(timer);
}, [selectedTest, isSubmitted]);
```

### Answer Selection
```javascript
const handleAnswerSelect = (answerIndex) => {
  if (!isSubmitted) {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  }
};
```

## Sample Test Data

### Quadratic Equations Test (47 Questions)
Comprehensive test covering:
- Standard form identification
- Discriminant calculations
- Root finding methods
- Nature of roots
- Word problems
- Completing the square
- Quadratic formula applications

### Mathematics Test 1 (7 Questions)
Focus on:
- Prime factorization
- HCF and LCM problems
- Polynomial zeros
- Linear equations in two variables

### Science Light Test (14 Questions)
Covering:
- Mirror types and properties
- Image formation
- Refraction and reflection
- Lens power calculations
- Optical instruments

## Integration Points

### API Integration
While the test system runs client-side, it could integrate with:
- User authentication system
- Progress tracking APIs
- Result storage endpoints
- Analytics tracking

### Future Enhancements
- Question bank expansion
- Adaptive testing
- Performance analytics
- Detailed progress reports
- Timed section tests
- Mock exam simulations

---

*This test system documentation was extracted from the EduVibe platform import and represents the current implementation structure.*