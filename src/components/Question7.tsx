import React from 'react';

interface Props {
  handleAnswerSelect: (character: string) => void;
}

const Question7: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h1 className="fixed top-8 text-white text-4xl font-bold mb-4">Q.7</h1>
      <div className="mt-16 text-center mb-4">
        <p className="text-white text-sm leading-relaxed">
          심해 깊은 곳에 있는 잠수함으로 수사를 하러 갔다.<br/>
          그런데, 갑자기 여기저기서 울리는 사이렌!<br/>
          어어… 어….? 갑자기 잠수함이 기울어진다! 이때 나는…
        </p>
      </div>
      <div className="space-y-4 w-full">
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('혜리')}
        >
          ① 이 상황을 해결하기 위해, 앞서 찍어뒀던 단서들을 꺼내본다.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('존박')}
        >
          ② 반대편으로 미끄러지는 친구를 긴 팔로 붙잡아준다.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('도훈')}
        >
          ③ 생각할 시간은 없어! 일단 눈 앞에 보이는 밸브를 돌려본다.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('은지')}
        >
          ④ 얘들아, 괜찮아? 빨리 안전바 잡아! 나도 힘들지만 동료들의 안전을 챙겨준다.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('카리나')}
        >
          ⑤ …이게 무슨 일이지? 몸을 움츠리고 멍하니 상황을 바라본다.
        </button>
        <button
          className="bg-white text-black text-base py-3 px-6 rounded-lg w-full text-left"
          onClick={() => handleAnswerSelect('용진')}
        >
          ⑥ 일단 밸브를 오른쪽으로 돌려 봐! 상황을 전달해준다.
        </button>
      </div>
    </div>
  );
};

export default Question7;
