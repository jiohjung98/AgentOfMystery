import React from 'react';
import QuestionLayout from './QuestionLayout';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question6: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <QuestionLayout
      questionNumber="Q.6"
      questionText={
        <>
          <p className="text-white text-sm leading-relaxed">
            비밀의 방에서 탈출을 시도하는 도중,<br />
            예상치 못한 장애물이 등장한다!<br />
            이 장애물을 넘기 위해 필요한 것은?
          </p>
          <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
            나는 어떻게 행동할까?
          </h2>
        </>
      }
    >
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('혜리')}
      >
        ① 그냥 내가 장애물을 넘는다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('존박')}
      >
        ② 다른 사람들에게 도움을 요청한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('도훈')}
      >
        ③ 장애물을 넘기 위한 방법을 계획한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('은지')}
      >
        ④ 팀원들이 함께 넘을 수 있도록 도와준다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('카리나')}
      >
        ⑤ 필요한 장비나 도구를 찾아 사용한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('용진')}
      >
        ⑥ 팀원들이 장애물을 넘을 수 있도록 지원한다.
      </button>
    </QuestionLayout>
  );
};

export default Question6;
