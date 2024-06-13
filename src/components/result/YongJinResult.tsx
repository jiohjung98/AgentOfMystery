import Image from 'next/image';
import React from 'react';

const YongJinResult: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col result-page text-white">
         <div className="absolute inset-0 z-0 result-background">
        <Image
          src="/background-result.avif"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold text-white">용진</h1>
      <p className="mt-4">당신은 적극적인 태도가 돋보이는 노력파입니다!</p>
    </div>
  );
};

export default YongJinResult;
