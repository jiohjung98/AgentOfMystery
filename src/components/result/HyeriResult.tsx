import Image from 'next/image';
import React from 'react';

const HyeriResult: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col result-page text-white custom-font">
         <div className="absolute inset-0 z-0">
            <Image
            src="/background-result.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            />
        </div>
      <h1 className="text-4xl font-bold text-white z-[1]">혜리</h1>
      <p className="mt-4">당신은 적극적인 태도가 돋보이는 노력파입니다!</p>
    </div>
  );
};

export default HyeriResult;
