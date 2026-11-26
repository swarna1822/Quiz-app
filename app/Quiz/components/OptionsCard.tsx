import React from "react";
import { options } from "../QuestionContainer";
import "../Quiz.css";

interface Props {
questionId:number,
  option: options;
  handleAnswers:any
  answers:any[]
}

const Options =({ option, handleAnswers, questionId, answers }: Props) => {
    let q = answers.find((item:any)=>item.Qid === questionId);
    const selected= option?.id === q?.id
  return (
    <button onClick={()=>handleAnswers(questionId, option)}  className={`option-button ${selected ? "selected" : ""}`}>
      <span className="option-id">{option.id}</span>
      <span>{option.text}</span>
    </button>
  );
};

export default Options;