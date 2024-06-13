import React from 'react';
import QuestionLayout from './QuestionLayout';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <QuestionLayout
      questionNumber="Q.3"
      questionText={
        <>
          <p className="text-white text-sm leading-relaxed">
            문제 해결에 한창인 도중,<br />동료가 아닌 낯선 인기척이 느껴졌다! <br />
            낯선 사람의 발소리가 점점 커지는데!
          </p>
          <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
            긴박한 순간, 나는...
          </h2>
        </>
      }
    >
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('혜리')}
      >
        ① 허둥지둥 대다 결국 숨지 못한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('존박')}
      >
        ② 멀어도 가장 안심할 수 있는 확실한 공간으로 몸을 숨긴다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('도훈')}
      >
        ③ 문 틈 사이에 낀 손가락, 어설프게 숨는다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('은지')}
      >
        ④ 불안한 마음에 몸이 얼어붙는다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('카리나')}
      >
        ⑤ 가장 가까운 공간으로 재빨리 몸을 숨긴다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('용진')}
      >
        ⑥ 긴박한 순간에서도 동료들의 안전을 살핀다.
      </button>
    </QuestionLayout>
  );
};

export default Question3;
