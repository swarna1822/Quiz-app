"use client";

import React, { useState } from "react";
import Options from "./components/OptionsCard";
import Question from "./components/QuestionCard";
import "./Quiz.css";
import Result from "./components/Result";

interface Props {
  data: any[];
}

export interface options {
  id: string;
  text: string;
}

interface Questions {
  id: number;
  question: string;
  options: options[];
  correctAnswer: string;
  feedback: Object;
}

const PER_PAGE = 1;

const QuestionsContainer = ({ data }: Props) => {
  const _data = data;
  const [current, setCurrent] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<any>([]);
  const start = PER_PAGE * (current - 1);
  const end = current * PER_PAGE;

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const storeAnswers = (qId: number, answer: any) => {
    setAnswers((prev: any) => {
      const alreadyPresent = prev.some((item: any) => item.Qid === qId);

      if (alreadyPresent) {
        return prev.map((item: any) =>
          item.Qid === qId ? { ...item, ...answer } : item,
        );
      }

      return [...prev, { Qid: qId, ...answer }];
    });
  };

  const handleSubmit = () => {
  setIsSubmitted(true);
};

const handleRestart = () => {
  setAnswers([]);
  setCurrent(1);
  setIsSubmitted(false);
};
  const handlePrevious = () => {
    setCurrent((prev) => prev - 1);
  };
  if (isSubmitted) {
  return (
    <Result
      data={data}
      answers={answers}
      onRestart={handleRestart}
    />
  );
}
  return (
    <div className="questions-container">
      <div className="questions-container-header">
        <h2>Quiz Questions</h2>
        <span>{_data.length} Questions</span>
      </div>

      <div className="questions-content">
        {_data.slice(start, end).map((item: Questions) => {
          return (
            <React.Fragment key={item?.id}>
              <Question question={item.question} />
              {item.options.map((option: options) => {
                return (
                  <Options
                    answers={answers}
                    questionId={item.id}
                    handleAnswers={storeAnswers}
                    key={option.id}
                    option={option}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
      <hr style={{ marginTop: "3px" }}></hr>
      <div className="btn-container">
        <button onClick={handlePrevious} disabled={current === 1}>
          Previous
        </button>
        {current !== _data.length && (
          <button
            onClick={handleNext}
            disabled={current === _data.length}
          >{`Next -->`}</button>
        )}
        {current === _data.length && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionsContainer;
