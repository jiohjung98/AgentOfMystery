import { useRouter } from 'next/router';
import HyeriResult from '@/components/result/HyeriResult';
import JohnParkResult from '@/components/result/JohnParkResult';
import DoHunResult from '@/components/result/DoHunResult';
import EunJiResult from '@/components/result/EunJiResult';
import KarinaResult from '@/components/result/KarinaResult';
import YongJinResult from '@/components/result/YongJinResult';
import Head from 'next/head';
import Background from '@/components/Background';
import Image from 'next/image';

type ResultsProps = {
  backgroundUrl: string;
};

const Result: React.FC<ResultsProps> = ({ backgroundUrl }) => {
  const router = useRouter();
  const { character } = router.query;

  const renderResultComponent = () => {
    switch (character) {
      case '혜리':
        return <HyeriResult />;
      case '존박':
        return <JohnParkResult />;
      case '도훈':
        return <DoHunResult />;
      case '은지':
        return <EunJiResult />;
      case '카리나':
        return <KarinaResult />;
      case '용진':
        return <YongJinResult />;
      default:
        return <div>결과를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center mx-auto">
      <Head>
        <title>나와 가장 어울리는 수사단원은?</title>
        <meta name="description" content="검증 결과 페이지" />
        <link rel="preload" href="/background-result.png" as="image" />
      </Head>
      <Background backgroundUrl={backgroundUrl} />
      <main className="relative flex-grow flex flex-col items-center w-full px-4 text-center z-10">
        <div className="absolute z-20 top-[-30px]">
          <Image
            src="/result-paper.png"
            alt="result"
            width={200}
            height={50}
            priority
          />
        </div>
        <div className="relative">
          {renderResultComponent()}
        </div>
      </main>
      <footer className="text-center py-4 items-center relative z-10">
        <Image src="/netflix-logo.png" alt="netflix" className="mx-auto" width={100} height={50} priority />
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const backgroundUrl = '/background-result.avif';

  return {
    props: {
      backgroundUrl,
    },
  };
};

export default Result;
