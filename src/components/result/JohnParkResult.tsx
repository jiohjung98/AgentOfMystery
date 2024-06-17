import Image from 'next/image';
import React from 'react';

type JohnParkResultProps = {
  show: boolean;
};

const JohnParkResult: React.FC<JohnParkResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
      <Image
          src="/JohnParkTitle.svg"
          alt="JohnPark"
          width={200}
          height={50}
          priority
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
        />
        <Image
          src="/JohnPark.png"
          alt="JohnPark"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[60px]"
        />
        <div className="font-hggothicssi-900 relative py-4 mb-4 top-[60px] relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
            모르는 문제는 나에게 물어봐~ 수사단 브레인 존박
          </p>
          <p className="font-hggothicssi-700 text-sm">
            #브레인 #만능해결사 #척척박사 #추리_괴물
          </p>
        </div>
      </div>
      <div className="w-full relative top-[50px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★☆☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="ml-[10px]">허당미</span>
            <span className="ml-auto text-yellow-400">★☆☆☆☆</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="">담력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="ml-[10px]">추리력</span>
            <span className="ml-auto text-yellow-400">★★★★★</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="">집중력</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="font-hggothicssi-400 w-full top-[60px] pb-4 text-left text-sm relative z-30">
        <p>- '행동파'보다는 '두뇌파'!</p>
        <p>- 하나를 보면 열을 안다! 추리력이 돋보이는 유형</p>
        <p>- 깜짝 놀라긴 하지만, 차분히 상황을 파악하는 스타일</p>
        <p>- 다른 동료들도 챙기는 세심함은 보너스!</p>
        <p>- 일단 고민해 보고 신중하게 합리적인 방향으로 행동함</p>
        <p>- 승부욕이 없는 건 아님! 서바이벌에서 더욱 두각을 보이는 타입</p>
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

export default JohnParkResult;
