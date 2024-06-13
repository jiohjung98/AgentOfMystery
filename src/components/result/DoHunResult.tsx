import Image from 'next/image';
import React from 'react';

type DoHunResultProps = {
  show: boolean;
};

const DoHunResult: React.FC<DoHunResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
        <h1 className="relative z-40 text-4xl text-black mt-[18px]">도훈</h1>
        <Image
          src="/Dohun.png"
          alt="Dohun"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[-30px]"
        />
        <div className="relative top-[-30px] p-4 mb-4 relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
          열정 하나로 문제를 풀어나간다! 열정맨 도훈
          </p>
          <p className="text-xs">
          #의욕과다 #행동파 #호기심만땅 #과몰입형
          </p>
        </div>
      </div>
      <div className="w-full relative top-[-40px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="">담력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">집중력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★☆☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="">차분함</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★☆☆☆☆</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="">궁금증</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="w-full text-left text-sm relative top-[-30px] z-30">
        <p>- 생각할 시간에 행동 먼저! 시원시원한 액션이 눈에 띄는 행동파.</p>
        <p>- 잘한다, 잘한다 하면 더 잘하는 사람.</p>
        <p>- 불의는 못 참지! 정의의 사도.</p>
        <p>- “이건 뭐지?, 저건 뭐지?” 신기함을 파헤치는 호기심왕</p>
        <p>- 콜, 당근이지, 오키! 일단 YES하고 보는 스타일.</p>
        <p>- 내 사주엔 화(火)가 제일 많을 거야. 답답한 건 싫은 화끈한 캐릭터!</p>
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default DoHunResult;
