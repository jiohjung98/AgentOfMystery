import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Background from '@/components/Background';
import Image from 'next/image';

type HomeProps = {
  backgroundUrl: string;
};

const Home: React.FC<HomeProps> = ({ backgroundUrl }) => {
  const [startClicked, setStartClicked] = useState(false);
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/quiz');
  };

  return (
    <div className="max-w-[500px] min-h-screen flex flex-col start-page text-white mx-auto start-font">
      <Head>
        <title>미스터리 수사단원 검증 미션</title>
        <meta name="description" content="Agent Of Mystery" />
        <meta property="og:title" content="미스터리 수사단원 검증 미션" />
        <meta property="og:description" content="검증 미션 시작하기" />
        <meta property="og:image" content="/mainlogo3.png" />
        <meta property="og:url" content="https://agent-of-mystery.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background backgroundUrl={backgroundUrl} />
      <main className="flex-grow flex flex-col h-full items-center mx-auto px-4 py-4 mt-[140px] text-center z-[1]">
        <h1 className="text-3xl">
          무정부 국제 조직 XIN <br />( <span className="text-red-500">X </span><span className="text-red-500">I</span>nvestigation <span className="text-red-500">N</span>etwork )
        </h1>
        <p className="text-lg leading-relaxed mt-8 font-weight">
          지구 상에서 일어나는 모든 미스터리한<br/>일들을 해결하는 비밀 조직 <span className="text-red-500">XIN</span>.<br />
          인류가 지금까지 발견하지 못한<br/>X-전파를 통해 각종 사건을 수사한다.<br /><br/>
          수사단 최정예 요원이 되기까지,<br/>마지막 한 단계만 남았다!<br />
          현장에 투입된 나와 가장 닮은<br/>미스터리 수사단원은?
        </p>
      </main>
      {!startClicked && (
        <div className='w-full px-6 z-[1]'>
          <button
            onClick={handleStartClick}
            className="red-button w-[90%]"
          >
            검증 미션 시작하기
          </button>
        </div>
      )}
        <footer className="absoulte bottom-0 text-center py-4 items-center z-10">
        <Image src='/netflix-logo.png' alt='netflix' className='mx-auto' width={100} height={50} priority />
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const backgroundUrl = '/background-start.avif';

  return {
    props: {
      backgroundUrl,
    },
  };
};

export default Home;
