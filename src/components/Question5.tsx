import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <><div className="fixed-header">
      Q.5
    </div><div className="flex flex-col items-center rounded-lg">
        <div className="text-center mb-4">
          <p className="text-white text-sm leading-relaxed">
            고지가 눈앞! 이제 탈출만 남은 상황이다.<br />
            그 순간, 범인이 들이닥쳤다!<br/>
            끌려가기 일보직전인 지금,
          </p>
        </div>
        <h2 className="text-white text-2xl font-bold mb-4 text-center leading-snug">
        가장 먼저 드는 생각은?
        </h2>
        <div className="space-y-4 w-full">
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('혜리')}
          >
            ① 이정도 시련쯤이야, 얼른 탈출할 수 있어!
          </button>
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('존박')}
          >
            ② 이게 무슨 상황이지…?
          </button>
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('도훈')}
          >
            ③ 아니 이걸 걸렸다고? 아 진짜 아쉽다…
          </button>
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('은지')}
          >
            ④ 다른 동료들은 괜찮나?
          </button>
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('카리나')}
          >
            ⑤ 살려주세요 살려주세요 (멘붕으로 사고력 정지)
          </button>
          <button
            className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
            onClick={() => handleAnswerSelect('용진')}
          >
            ⑥ 미운 놈 떡 하나 더 줄 수 있으니 대화를 시도해볼까?
          </button>
        </div>
      </div></>
  );
};

export default Question5;
