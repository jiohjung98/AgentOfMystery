import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home = () => {
  const [startClicked, setStartClicked] = useState(false);
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen flex flex-col start-page text-white custom-font">
      <Head>
        <title>Agent of Mystery</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=YourFontName:wght@400;700&display=swap"
        />
        <link rel="preload" href="/background-start.png" as="image" />
      </Head>
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-4 mt-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          무정부 국제 조직 XIN <br />( <span className="text-red-500">X </span><span className="text-red-500">I</span>nvestigation <span className="text-red-500">N</span>etwork )
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mt-8">
          지구 상에서 일어나는 모든 미스터리한<br/>일들을 해결하는 비밀 조직 <span className="text-red-500">XIN</span>.<br />
          인류가 지금까지 발견하지 못한<br/>X-전파를 통해 각종 사건을 수사한다.<br /><br/>
          수사단 최정예 요원이 되기까지,<br/>마지막 한 단계만 남았다!<br />
          현장에 투입된 나와 가장 닮은<br/>미스터리 수사단원은?
        </p>
      </main>
      {!startClicked && (
        <div className='w-full px-6'>
          <button
            onClick={handleStartClick}
            className="red-button w-full mb-4"
          >
            검증 미션 시작하기
          </button>
          </div>
        )}
      <footer className="text-center pb-6 items-center">
        <Image src='/netflix-logo.png' alt='netflix' className='mx-auto' width={100} height={50} loading='eager' />
      </footer>
    </div>
  );
};

export default Home;
