import Image from 'next/image';
import React from 'react';

type YongJinResultProps = {
  show: boolean;
};

const YongJinResult: React.FC<YongJinResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
      <Image
          src="/YongjinTitle.svg"
          alt="Yongjin"
          width={200}
          height={50}
          priority
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
        />
        <Image
          src="/Yongjin.png"
          alt="Yongjin"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[60px]"
        />
        <div className="font-hggothicssi-900 relative px-2 py-4 mb-4 top-[60px] relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
          우당탕탕 수사단의 든든한 수장이자<br/>진정한 센스쟁이 용진
          </p>
          <p className="font-hggothicssi-700 text-sm">
          #탱커 #단서수집 #비자발적_리더 #매의_눈
          </p>
        </div>
      </div>
      <div className="w-full relative top-[50px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600 ml-[10px]">담력</span>
            <span className="ml-auto text-yellow-400">★★☆☆☆</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600">집중력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600 ml-[10px]">관찰력</span>
            <span className="ml-auto text-yellow-400">★★★★★</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="font-hggothicssi-600">센스</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="font-hggothicssi-400 w-full top-[60px] pb-4 text-left text-sm relative z-30">
        <p>- 긴장되는 순간에는 어쩔 수 없이(?) 앞장서는 선택적 탱커</p>
        <p>- 타고난 육감으로 침착하게 문제를 해결하는 타입</p>
        <p>- 다른 사람들이 못 찾는 단서를 한 번에 찾아내는 전지적 관찰자 시점</p>
        <p>- 부드러운 카리스마로 동료들을 잘 이끄는 리더형</p>
        <p>- 심각한 상황에서도 웃음 한 스푼~ 없어서는 안 될 분위기메이커!</p>
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

export default YongJinResult;
