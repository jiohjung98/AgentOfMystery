import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question6: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h1 className="fixed top-8 text-white text-4xl font-bold mb-4">Q.6</h1>
      <div className="mt-16 text-center mb-4">
        <p className="text-white text-sm leading-relaxed">
          사라진 실종자 6명을 찾고 있는 미스터리 수사단!<br/>
          다음 장소로 이동하려고 문을 열었는데, 복도에 시체 한 구가 널브러져 있었다.<br/>
          자세히 보니 머리 없는 시체…?! 이 때 나는…
        </p>
      </div>
      <div className="space-y-4 w-full">
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('혜리')}
        >
          ① 왜 시체에 머리가 없는지 생각해본다. “폭발 사고가 있었나?"
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('존박')}
        >
          ② 놀랐지만 어떤 상황인지 조용히 파악해본다. “...”
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('도훈')}
        >
          ③ 동료들이 이동할 수 있게 시체를 밖으로 치운다. “읏차-”
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('은지')}
        >
          ④ 시체를 보자마자 눈물이 쏟아질 것 같다. “이게 무슨 일이니..."
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('카리나')}
        >
          ⑤ 시체 옷을 뒤져서 발견한 물품을 챙겨둔다. “혹시 모르니까~”
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('용진')}
        >
          ⑥ 찾고 있는 실종자와 시체의 신원을 대조해본다. “어?! 이 사람은-!”
        </button>
      </div>
    </div>
  );
};

export default Question6;