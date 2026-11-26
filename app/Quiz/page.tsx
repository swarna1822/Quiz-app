
import { quizData } from "./data";
import QuestionsContainer from "./QuestionContainer";
import "./Quiz.css";

const QuizMainComponent = () => {
  const data = quizData;

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px'}}>
        <div className="quiz-logo">Q</div>
        <h1>Quiz App</h1>

        </div>
        <p>Test your knowledge and see how much you know!</p>
      </div>

      <QuestionsContainer data={data} />
    </div>
  );
};

export default QuizMainComponent;
