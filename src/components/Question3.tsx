import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <>
      <h1>Q3. 문제 해결에 한창인 도중, 동료가 아닌 낯선 인기척이 느껴졌다!<br/>낯선 사람의 발소리가 점점 커지는데! 긴박한 순간, 나는...</h1>
      <button onClick={() => handleAnswerSelect('혜리')}>허둥지둥 대다 결국 숨지 못한다.</button>
      <button onClick={() => handleAnswerSelect('존박')}>멀어도 가장 안심할 수 있는 확실한 공간으로 몸을 숨긴다. </button>
      <button onClick={() => handleAnswerSelect('도훈')}>문 틈 사이에 낀 손가락, 어설프게 숨는다.</button>
      <button onClick={() => handleAnswerSelect('은지')}>불안한 마음에 몸이 얼어붙는다.</button>
      <button onClick={() => handleAnswerSelect('카리나')}>가장 가까운 공간으로 재빨리 몸을 숨긴다.</button>
      <button onClick={() => handleAnswerSelect('용진')}>긴박한 순간에서도 동료들의 안전을 살핀다.</button>
    </>
  );
};

export default Question3;
