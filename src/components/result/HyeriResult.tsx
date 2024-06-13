import Image from 'next/image';
import React from 'react';

const HyeriResult: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col result-page text-white ">
         <div className="absolute inset-0 z-0 result-background">
        <Image
          src="/background-result.avif"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute top-[20px]">
            <Image
                src="/result-paper.png"
                alt="result"
                width={200}
                height={100}
                priority
                className='z-[100]'
            />
        </div>
        <div className="absolute top-[67px]">
      <h1 className="text-4xl font-bold text-white">혜리</h1>
      </div>
      <p className="mt-40">당신은 적극적인 태도가 돋보이는 노력파입니다!</p>
    </div>
  );
};

export default HyeriResult;
