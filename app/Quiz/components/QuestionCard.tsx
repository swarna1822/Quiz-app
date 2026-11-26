import "../Quiz.css";

interface Props {
  question: string;
}

const Question = ({ question }: Props) => {
  return (
    <div className="question-card">
      <h3>{question}</h3>
    </div>
  );
};

export default Question;