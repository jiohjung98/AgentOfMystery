import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <>
      <h1>Q1. 드디어 꿈에 그리던 미스터리 수사단에 합류하게 당신! 불가사의하고 초자연적인 미션을 해결해야 한다. 이때 내가 되고 싶은 수사단원은?</h1>
      <button onClick={() => handleAnswerSelect('혜리')}>적극적인 태도가 돋보이는 노력파</button>
      <button onClick={() => handleAnswerSelect('존박')}>어떤 문제든 척척 풀어내는 브레인</button>
      <button onClick={() => handleAnswerSelect('도훈')}>열정만큼 몸부터 앞서는 행동파</button>
      <button onClick={() => handleAnswerSelect('은지')}>공감능력 탑재한 분위기 메이커</button>
      <button onClick={() => handleAnswerSelect('카리나')}>없는 게 없는 보부상</button>
      <button onClick={() => handleAnswerSelect('용진')}>모두가 기댈 수 있는 리더</button>
    </>
  );
};

export default Question1;
