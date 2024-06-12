import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question4: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h1 className="mt-4 text-white text-4xl font-bold mb-4">Q.4</h1>
      <div className="text-center mb-4">
        <p className="text-white text-sm leading-relaxed">
          수사 도중 비밀의 방을 발견한 미스터리 수사단!<br />
          비밀의 방 앞에 있는 의문의 버튼을 발견한다.<br />
          누르면 들어갈 수 있는 건가…?
        </p>
      </div>
      <h2 className="text-white text-2xl font-bold mb-4 text-center leading-snug">
      이때 나는 어떻게 해야 할까?
      </h2>
      <div className="space-y-4 w-full">
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('혜리')}
        >
          ① 어, 이거 단서 아냐? 사진 먼저 찍을게.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('존박')}
        >
          ② 버튼 누르기 전에 한 명이 망보고 있자.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('도훈')}
        >
          ③ 잠깐만! 누군가 우리를 지켜보고 있는 것 같지 않아?
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('은지')}
        >
          ④ 누르지 말자…ㅠㅠ 누를 거면 나는 빼줘...
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('카리나')}
        >
          ⑤ 다들 어떻게 생각해? 난 상관없어.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('용진')}
        >
          ⑥ 저거 누가 봐도 누르라는 거 아냐?
        </button>
      </div>
    </div>
  );
};

export default Question4;
