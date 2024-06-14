import React, { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';

type ResultsProps = {
  backgroundUrl: string;
};

const Result: React.FC<ResultsProps> = ({ backgroundUrl }) => {
  const router = useRouter();
  const { character } = router.query;
  const [loading, setLoading] = useState(true);
  const [showCompletedMessage, setShowCompletedMessage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [startClicked, setStartClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowCompletedMessage(true);
      setTimeout(() => {
        setShowCompletedMessage(false);
        setTimeout(() => {
          setShowResult(true);
        }, 500); 
      }, 1000); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    setStartClicked(true);
    router.push('/');
  };

  const handleEventEntryClick = () => {
    window.location.href = 'https://forms.gle/a8AFDe2xi1cxMMYF8';
  };

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
        <link rel="preload" href="/background-result.avif" as="image" />
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
          {!loading && showCompletedMessage && (
            <motion.p
              className="text-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              결과 분석 완료!
            </motion.p>
          )}
        </div>
        <div className={`result-container ${showResult ? 'fade-in' : ''}`}>
          <div className="absolute left-1/2 top-[20px] transform -translate-x-1/2 z-20">
            <Image
              src="/result-paper.png"
              alt="result"
              width={200}
              height={50}
              priority
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>
          <div className="font-hggothicssi-600 absolute right-4 top-[20px] z-20" onClick={handleStartClick}>
            테스트 다시 하러 가기
          </div>
          {renderResultComponent()}
          <motion.button
            className="text-2xl red-button w-[90%] mx-auto"
            style={{ display: 'block' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={handleEventEntryClick}
          >
            이벤트 응모하기
          </motion.button>
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
