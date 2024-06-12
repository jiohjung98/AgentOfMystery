import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <>
      <h1>Q5. 고지가 눈앞! 이제 탈출만 남은 상황이다. 그 순간, 범인이 들이닥쳤다!<br/>범인들에게 순식간에 포위된 미스터리 수사단.<br/>끌려가기 일보직전인 지금, 가장 먼저 드는 생각은?</h1>
      <button onClick={() => handleAnswerSelect('혜리')}>이정도 시련쯤이야, 얼른 탈출할 수 있어!</button>
      <button onClick={() => handleAnswerSelect('존박')}>이게 무슨 상황이지…?</button>
      <button onClick={() => handleAnswerSelect('도훈')}>아니 이걸 걸렸다고? 아 진짜 아쉽다… </button>
      <button onClick={() => handleAnswerSelect('은지')}>다른 동료들은 괜찮나?</button>
      <button onClick={() => handleAnswerSelect('카리나')}>살려주세요 살려주세요 (멘붕으로 사고력 정지)</button>
      <button onClick={() => handleAnswerSelect('용진')}>미운 놈 떡 하나 더 줄 수 있으니 대화를 시도해볼까?</button>
    </>
  );
};

export default Question5;
