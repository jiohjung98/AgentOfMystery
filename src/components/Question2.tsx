import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question2: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <>
      <h1>Q2. 본격적인 추리를 앞둔 미스터리 수사단! 아직 아무런 정보도 주어지지 않았는데… 수사 전, 어떤 걸 준비해야 할까?</h1>
      <button onClick={() => handleAnswerSelect('혜리')}>충분한 숙면은 필수! 전 날 밤, 푹 자고 온다.</button>
      <button onClick={() => handleAnswerSelect('존박')}>머리 쓰면 당 떨어져… 초콜릿을 챙긴다.</button>
      <button onClick={() => handleAnswerSelect('도훈')}>아무래도 체면은 지켜야지. 간단한 화장품을 챙긴다.</button>
      <button onClick={() => handleAnswerSelect('은지')}>슬쩍- 안 주머니로 몰래 휴대폰을 숨겨둔다.</button>
      <button onClick={() => handleAnswerSelect('카리나')}>마음가짐 준비 완료. 동료들에게 도움이 되겠다고 결심한다.</button>
      <button onClick={() => handleAnswerSelect('용진')}>장갑… 노트… 왠지 필요할 것 같은 실용적인 물건을 챙긴다.</button>
    </>
  );
};

export default Question2;
