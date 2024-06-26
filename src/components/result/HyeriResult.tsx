import React from 'react';
import Image from 'next/image';

type HyeriResultProps = {
  show: boolean;
};

const HyeriResult: React.FC<HyeriResultProps> = ({ show }) => {
  return (
    <div className={`flex flex-col result-page text-white relative ${show ? 'fade-in' : ''}`}>
      <div className="">
      <Image
          src="/HyeriTitle.svg"
          alt="Hyeri"
          width={200}
          height={50}
          priority
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
        />
        <Image
          src="/Hyeri.png"
          alt="Hyeri"
          width={500}
          height={500}
          priority
          className="relative z-10 top-[60px]"
        />
        <div className="font-hggothicssi-900 relative px-2 py-4 mb-4 top-[60px] relative z-30" style={{ backgroundColor: 'rgb(53, 20, 15)' }}>
          <p className="mb-2">
            탈출을 위한 덕목은 다 갖췄다 + 허당미는 덤! 혜리
          </p>
          <p className="font-hggothicssi-700 text-sm">
            #방탈출_고인물 #감초역할 #못_먹어도_고!
          </p>
        </div>
      </div>
      <div className="w-full relative top-[50px] space-y-2 text-lg relative z-30">
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600">행동력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★☆☆</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600 ml-[10px]">담력</span>
            <span className="ml-auto text-yellow-400">★☆☆☆☆</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600">집중력</span>
            <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
          </div>
          <div className="flex items-center w-1/2">
            <span className="font-hggothicssi-600 ml-[10px]">허당미</span>
            <span className="ml-auto text-yellow-400">★★★★☆</span>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <span className="font-hggothicssi-600">협력</span>
          <span className="ml-auto mr-[15px] text-yellow-400">★★★★★</span>
        </div>
      </div>
      <div className="font-hggothicssi-400 w-full top-[60px] pb-4 text-left text-sm relative z-30">
        <p>- 상황의 인과관계를 파악하려고 노력함</p>
        <p>- 꺅!! 깜짝 놀랄 상황에서는 앞장서기 보단, 뒤에서 빼꼼~?</p>
        <p>- 방탈출 고인물답게 늘 자신감 있는 태도로 임함</p>
        <p>- 동료들의 의견에 귀를 잘 기울이고 협력하는 유형</p>
        <p>- 단서를 수집할 때나, 문제를 해결하려고 할 때 귀여운 허당미도 뽐냄</p>
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

export default HyeriResult;
