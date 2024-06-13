import React from 'react';
import QuestionLayout from './QuestionLayout';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question7: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <QuestionLayout
      questionNumber="Q.7"
      questionText={
        <>
          <p className="text-white text-sm leading-relaxed">
            비밀의 방에서 탈출한 후,<br />
            다시 되돌아가기 위한 길이 막혔다!<br />
            다시 되돌아가기 위한 방법은?
          </p>
          <h2 className="text-white text-2xl font-bold mb-4 text-center leading-snug">
            나의 선택은?
          </h2>
        </>
      }
    >
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('혜리')}
      >
        ① 직접 되돌아가는 방법을 찾는다.
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('존박')}
      >
        ② 다른 사람들과 함께 되돌아가는 방법을 찾는다.
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('도훈')}
      >
        ③ 어떻게든 되돌아가는 방법을 찾는다.
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('은지')}
      >
        ④ 동료들과 함께 논의하여 결정한다.
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('카리나')}
      >
        ⑤ 나의 아이디어를 제시하여 해결책을 찾는다.
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('용진')}
      >
        ⑥ 팀원들과 협력하여 가장 좋은 방법을 결정한다.
      </button>
    </QuestionLayout>
  );
};

export default Question7;
