
interface Option {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

interface Answer {
  Qid: number;
  id:string;
  text: string;
}

interface Props {
  data: QuizQuestion[];
  answers: Answer[];
  onRestart: () => void;
}

const Result = ({ data, answers, onRestart }: Props) => {
    console.log(answers)
  const correctCount = data.filter((question) => {
    const userAnswer = answers.find(
      (answer) => answer.Qid === question.id
    );

    return userAnswer?.id === question.correctAnswer;
  }).length;

  const unansweredCount = data.length - answers.length;
  const incorrectCount = data.length - correctCount - unansweredCount;

  const percentage = data.length
    ? Math.round((correctCount / data.length) * 100)
    : 0;

  return (
    <div className="result-container">
      <div className="result-header">
        <h1>Quiz Completed! 🎉</h1>
        <p>Here is your quiz performance.</p>
      </div>

      <div className="score-card">
        <h2>{correctCount} / {data.length}</h2>
        <p>Your Score</p>
        <span>{percentage}% Accuracy</span>
      </div>

      <div className="result-stats">
        <div className="stat-card correct">
          <h3>{correctCount}</h3>
          <p>Correct</p>
        </div>

        <div className="stat-card incorrect">
          <h3>{incorrectCount}</h3>
          <p>Incorrect</p>
        </div>

        <div className="stat-card unanswered">
          <h3>{unansweredCount}</h3>
          <p>Unanswered</p>
        </div>
      </div>

      <div className="feedback-container">
        <h2>Question-wise Feedback</h2>

        {data.map((question, index) => {
          const userAnswer = answers.find(
            (answer) => answer.Qid === question.id
          );

          const isCorrect =
            userAnswer?.id === question.correctAnswer;

          const selectedOption = question.options.find(
            (option) => option.id === userAnswer?.id
          );

          const correctOption = question.options.find(
            (option) => option.id === question.correctAnswer
          );

          return (
            <div className="feedback-card" key={question.id}>
              <div className="feedback-title">
                <h3>
                  {index + 1}. {question.question}
                </h3>

                <span className={isCorrect ? "correct-label" : "incorrect-label"}>
                  {!userAnswer
                    ? "Unanswered"
                    : isCorrect
                    ? "Correct"
                    : "Incorrect"}
                </span>
              </div>

              <p>
                Your answer: {selectedOption?.text ?? "Not answered"}
              </p>

              {!isCorrect && (
                <p>
                  Correct answer: {correctOption?.text}
                </p>
              )}

              <p className="feedback-message">
                {!userAnswer
                  ? `Correct answer: ${correctOption?.text}`
                  : isCorrect
                  ? question.feedback.correct
                  : question.feedback.incorrect}
              </p>
            </div>
          );
        })}
      </div>

      <button className="restart-button" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
