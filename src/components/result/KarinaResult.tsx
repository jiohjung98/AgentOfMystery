import Image from 'next/image';
import React from 'react';

type DoHunResultProps = {
  show: boolean;
};

const KarinaResult: React.FC<DoHunResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
        <h1 className="relative z-40 text-4xl text-black mt-[18px]">카리나</h1>
        <Image
          src="/Karina.png"
          alt="Karina"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[-30px]"
        />
        <div className="relative top-[-30px] p-4 mb-4 relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
            없는 게 없다! 만능 주머니 탑재한 막냉이 카리나
          </p>
          <p className="text-xs">
            #손_빠른_막내 #보부상 #확신의_사랑둥이
          </p>
        </div>
      </div>
      <div className="w-full relative top-[-40px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="">담력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★☆☆☆</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">집중력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="">순발력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★☆</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="">눈차</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="w-full text-left text-sm relative top-[-30px] z-30">
        <p>- “제가 할게요” 눈치 빠른 성실한 막내</p>
        <p>- 숨바꼭질 장인! 무서우면 누구보다 빠르게 숨어버림</p>
        <p>- “이것도 필요할 것 같아…” 일단 가방에 넣고 보는 콜렉터!</p>
        <p>- 조용히 있어도 모든 사람의 관심을 받는 존재감 강한 캐릭터</p>
        <p>- 착한 얼굴에 그렇지 못한 눈빛. 의외로 용감한 면모를 가진 반전매력</p>
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

export default KarinaResult;
