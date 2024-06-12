// pages/index.js

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [startClicked, setStartClicked] = useState(false);
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Agent of Mystery</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-4 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 whitespace-no-wrap">미스터리 수사단에 들어간다면?<br/>수사 성향 테스트!</h1>
        <p className="text-sm md:text-lg lg:text-xl whitespace-no-wrap">미스터리 수사단의 일원이 된 당신!<br/>과학적으로 설명할 수 없는 특수한 사건들을 전담한다.<br/>당신과 수사 성향이 가장 비슷한 사람은?</p>
        <div className="absolute bottom-0 text-white text-center py-6">
        {!startClicked && (
          <button onClick={handleStartClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">시작하기</button>
        )}
      </div>
      </main>
    </div>
  );
};

export default Home;
