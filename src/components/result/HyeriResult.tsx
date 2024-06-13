import Image from 'next/image';
import React from 'react';

const HyeriResult: React.FC = () => {
  return (
    <div className="flex flex-col result-page text-white ">
        <div className="absolute top-[48px]">
      <h1 className="text-4xl font-bold text-black z-[100]">혜리</h1>
      <Image
        src="/Hyeri.png"
        alt="Hyeri"
        width={500}
        height={50}
        priority
      />
      </div>
      <p className="mt-40">당신은 적극적인 태도가 돋보이는 노력파입니다!</p>
    </div>
  );
};

export default HyeriResult;
