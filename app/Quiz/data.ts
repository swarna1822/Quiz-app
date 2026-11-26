
export const quizData = [
  {
    id: 1,
    question: "What is React?",
    options: [
      { id: "A", text: "JavaScript Library" },
      { id: "B", text: "Programming Language" },
      { id: "C", text: "Database" },
      { id: "D", text: "Operating System" }
    ],
    correctAnswer: "A",
    feedback: {
      correct: "Correct! React is a JavaScript library for building user interfaces.",
      incorrect: "Incorrect! React is a JavaScript library used to build UI."
    }
  },
  {
    id: 2,
    question: "Which hook is used to manage state in React?",
    options: [
      { id: "A", text: "useEffect" },
      { id: "B", text: "useState" },
      { id: "C", text: "useRef" },
      { id: "D", text: "useMemo" }
    ],
    correctAnswer: "B",
    feedback: {
      correct: "Correct! useState allows functional components to manage state.",
      incorrect: "Incorrect! useState is used to manage component state."
    }
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      { id: "A", text: "A database query language" },
      { id: "B", text: "A CSS framework" },
      { id: "C", text: "JavaScript XML syntax extension" },
      { id: "D", text: "A React hook" }
    ],
    correctAnswer: "C",
    feedback: {
      correct: "Correct! JSX allows us to write HTML-like syntax in JavaScript.",
      incorrect: "Incorrect! JSX is a syntax extension for JavaScript."
    }
  },
  {
    id: 4,
    question: "Which hook is used to perform side effects?",
    options: [
      { id: "A", text: "useMemo" },
      { id: "B", text: "useCallback" },
      { id: "C", text: "useContext" },
      { id: "D", text: "useEffect" }
    ],
    correctAnswer: "D",
    feedback: {
      correct: "Correct! useEffect is used to handle side effects.",
      incorrect: "Incorrect! useEffect handles side effects in React."
    }
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    options: [
      { id: "A", text: "A lightweight representation of the DOM" },
      { id: "B", text: "A browser API" },
      { id: "C", text: "A CSS property" },
      { id: "D", text: "A JavaScript compiler" }
    ],
    correctAnswer: "A",
    feedback: {
      correct: "Correct! Virtual DOM is a lightweight representation of the real DOM.",
      incorrect: "Incorrect! Virtual DOM represents the real DOM in memory."
    }
  }
];
