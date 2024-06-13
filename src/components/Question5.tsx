import React from 'react';
import QuestionLayout from './QuestionLayout';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <QuestionLayout
      questionNumber="Q.5"
      questionText={
        <>
          <p className="text-white text-sm leading-relaxed">
            비밀의 방 속에 갇힌 미스터리 수사단!<br />
            탈출을 도와줄 단서를 찾았다.<br />
            그런데 단서를 발견한 장소는 위험하다.
          </p>
          <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
            단서를 얻기 위해 내가 할 행동은?
          </h2>
        </>
      }
    >
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('혜리')}
      >
        ① 위험을 감수하고 단서를 챙긴다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('존박')}
      >
        ② 모두의 안전을 위해 단서를 포기한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('도훈')}
      >
        ③ 어차피 다 같이 탈출할 거니까 기다린다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('은지')}
      >
        ④ 다른 사람들이 안전하게 탈출하도록 지원한다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('카리나')}
      >
        ⑤ 나의 특기를 활용해 안전하게 단서를 챙긴다.
      </button>
      <button
        className="bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('용진')}
      >
        ⑥ 단서를 챙기기 위해 계획적으로 행동한다.
      </button>
    </QuestionLayout>
  );
};

export default Question5;
