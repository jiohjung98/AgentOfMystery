import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question2: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-white text-4xl font-bold mb-4">Q.2</h1>
        <p className="text-white text-xl leading-relaxed">
          본격적인 추리를 앞둔 미스터리 수사단! <br />
          아직 아무런 정보도 주어지지 않았는데… <br />
          수사 전, 어떤 걸 준비해야 할까?
        </p>
      </div>
      <div className="space-y-4 w-full">
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('혜리')}
        >
          ① 충분한 숙면은 필수!<br/>전 날 밤, 푹 자고 온다.
        </button>
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('존박')}
        >
          ② 머리 쓰면 당 떨어져… 초콜릿을 챙긴다.
        </button>
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('도훈')}
        >
          ③ 아무래도 체면은 지켜야지.<br/>간단한 화장품을 챙긴다.
        </button>
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('은지')}
        >
          ④ 슬쩍- 안 주머니로<br/>몰래 휴대폰을 숨겨둔다.
        </button>
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('카리나')}
        >
          ⑤ 마음가짐 준비 완료.<br/>동료들에게 도움이 되겠다고 결심한다.
        </button>
        <button
          className="bg-white text-black text-lg py-3 px-6 rounded-lg w-full"
          onClick={() => handleAnswerSelect('용진')}
        >
          ⑥ 장갑… 노트… 왠지 필요할 것 같은<br/>실용적인 물건을 챙긴다.
        </button>
      </div>
    </div>
  );
};

export default Question2;
