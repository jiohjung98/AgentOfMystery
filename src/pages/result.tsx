import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Background from '@/components/Background';
import HyeriResult from '@/components/result/HyeriResult';
import JohnParkResult from '@/components/result/JohnParkResult';
import DoHunResult from '@/components/result/DoHunResult';
import EunJiResult from '@/components/result/EunJiResult';
import KarinaResult from '@/components/result/KarinaResult';
import YongJinResult from '@/components/result/YongJinResult';

type ResultsProps = {
  backgroundUrl: string;
};

const Result: React.FC<ResultsProps> = ({ backgroundUrl }) => {
  const router = useRouter();
  const { character } = router.query;
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
      setTimeout(() => {
        setShowResult(true); 
      }, 1000); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const renderResultComponent = () => {
    switch (character) {
      case '혜리':
        return <HyeriResult show={showResult} />;
      case '존박':
        return <JohnParkResult show={showResult} />;
      case '도훈':
        return <DoHunResult show={showResult} />;
      case '은지':
        return <EunJiResult show={showResult} />;
      case '카리나':
        return <KarinaResult show={showResult} />;
      case '용진':
        return <YongJinResult show={showResult} />;
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          {loading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              <p className="ml-2 text-lg text-white">결과 분석 중...</p>
            </div>
          )}
        </div>
        <div className={`result-container ${showResult ? 'fade-in' : ''}`}>
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-20">
            <Image
              src="/result-paper.png"
              alt="result"
              width={200}
              height={50}
              priority
            />
          </div>
          {renderResultComponent()}
        </div>
      </main>
      <footer className="text-center py-4 items-center relative z-10">
        <Image src="/netflix-logo.png" alt="netflix" className="mx-auto" width={100} height={50} priority />
      </footer>

      <style jsx>{`
        .result-container {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .fade-in {
          opacity: 1;
        }
        .border-white {
          border-color: white; /* 로딩 스피너 테두리 색상 설정 */
        }
      `}</style>
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
