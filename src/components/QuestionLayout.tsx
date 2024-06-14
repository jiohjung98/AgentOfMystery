import React from 'react';

interface Props {
  questionNumber: string;
  questionText: React.ReactNode;
  children: React.ReactNode;
}

const QuestionLayout: React.FC<Props> = ({ questionNumber, questionText, children }) => {
  return (
    <>
      <div className="fixed-header">
        {questionNumber}
      </div>
      <div className="w-full flex flex-col items-center rounded-lg mt-[60px]">
        <div className="text-center">
          {questionText}
        </div>
        <div className="space-y-4 w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default QuestionLayout;
