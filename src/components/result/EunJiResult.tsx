import Image from 'next/image';
import React from 'react';

type EunJiResultProps = {
  show: boolean;
};

const EunJiResult: React.FC<EunJiResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
        <h1 className="relative z-40 text-4xl text-black mt-[18px]">이은지</h1>
        <Image
          src="/Eunji.png"
          alt="Eunji"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[-30px]"
        />
        <div className="relative top-[-30px] p-4 mb-4 relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
          확신의 F형 인간! 감성적 보호자 은지
          </p>
          <p className="text-xs">
          #공감왕 #긍정에너지 #서포터 #리액션부자
          </p>
        </div>
      </div>
      <div className="w-full relative top-[-40px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★☆☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="ml-[10px]">담력</span>
            <span className="ml-auto text-yellow-400">☆☆☆☆☆</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">집중력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="ml-[10px]">허당미</span>
            <span className="ml-auto text-yellow-400">★★★★☆</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="">공감능력</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="w-full text-left text-sm relative top-[-30px] z-30">
        <p>- 촌철살인 리액션은 바로 공감과 이해에서부터 나온다</p>
        <p>- 무서운 건 싫어ㅠㅠ 깜짝 놀라면 발 빠르게 도망가는 타입</p>
        <p>- 공감 KING! 지친 동료들의 기운을 북돋아 줌</p>
        <p>- 은근히 집중력이 좋아서 문제를 끝까지 풀어내려고 노력하는 스타일</p>
        <p>- 물벼락을 맞아도 ‘럭키은지’잖아🍀 긍정에너지로 따라올 자가 없다</p>
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

export default EunJiResult;
