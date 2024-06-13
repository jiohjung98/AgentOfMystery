import React from 'react';
import QuestionLayout from './QuestionLayout';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <QuestionLayout
      questionNumber="Q.1"
      questionText={
        <>
          <p className="text-white text-sm leading-relaxed">
            드디어 꿈에 그리던 <br />
            미스터리 수사단에 합류하게 당신!! <br />
            불가사의하고 초자연적인 <br />
            미션을 해결해야 한다.
          </p>
          <h2 className="text-white text-2xl font-bold mb-4 text-center leading-snug">
            이때 내가 되고 싶은 <br /> 수사단원은?
          </h2>
        </>
      }
    >
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('혜리')}
      >
        ① 적극적인 태도가 돋보이는 노력파
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('존박')}
      >
        ② 어떤 문제든 척척 풀어내는 브레인
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('도훈')}
      >
        ③ 열정만큼 몸부터 앞서는 행동파
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('은지')}
      >
        ④ 공감능력 탑재한 분위기 메이커
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('카리나')}
      >
        ⑤ 없는 게 없는 보부상
      </button>
      <button
        className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
        onClick={() => handleAnswerSelect('용진')}
      >
        ⑥ 모두가 기댈 수 있는 리더
      </button>
    </QuestionLayout>
  );
};

export default Question1;
