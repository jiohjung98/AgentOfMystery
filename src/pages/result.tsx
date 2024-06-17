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
    <div className="max-w-[500px] relative min-h-screen flex flex-col justify-between items-center mx-auto">
      <Head>
        <title>나와 가장 어울리는 수사단원은?</title>
        <meta name="description" content="검증 결과 페이지" />
        <link rel="preload" href="/background-result.avif" as="image" />
      </Head>
      <Background backgroundUrl={backgroundUrl} />
      <motion.main
        className="relative flex-grow flex flex-col items-center w-full px-4 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
        <div className={`result-container pb-[50px] ${showResult ? 'fade-in' : ''}`}>
          <div className="font-hggothicssi-600 absolute text-sm right-4 top-[20px] z-20" onClick={handleStartClick}>
            테스트 다시 하러 가기
          </div>
          {renderResultComponent()}
        </div>
      </motion.main>
      <motion.footer
        className="text-center py-4 w-full flex flex-col items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: showResult ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mb-4">
          <div className="font-hggothicssi-600 text-xl mb-2 mt-4">
            검증 미션에 참여한 수사단원에게 주어지는
            <br />
            &lt;미스터리 수사단&gt; 스페셜 굿즈 응모 기회!
          </div>
          <div className="relative h-[55px]">
            <Image
              src="/eventbackground.png"
              alt="event"
              className="mx-auto"
              width={170}
              height={50}
              priority
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-hggothicssi-800">
              이벤트 기간
            </div>
          </div>
          <div className='mb-[10px]'>
            <div className='font-hggothicssi-600 text-lg'>24.06.18 (화)- 24.06.25 (화) 2:00PM 까지</div>
            <div className='font-hggothicssi-600 text-[10px]'>※ 본 이벤트 당첨자는 24.06.26 [수] 2:00 PM 이후 문자를 통한 개별 안내</div>
          </div>
          <div className="relative w-full h-[55px]">
            <Image
              src="/eventbackground.png"
              alt="event"
              className="mx-auto"
              width={170}
              height={50}
              priority
            />
            <Image
              src="/eventBox.png"
              alt="event"
              width={100}
              height={30}
              className="absolute left-[-15px] top-1/2 transform -translate-y-1/2"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-hggothicssi-800">
              이벤트 상품
            </div>
          </div>
          <div className='mb-[10px]'>
            <div className='font-hggothicssi-600 text-lg'>&lt;미스터리 수사단&gt;에 관련된<br/>특별한 굿즈가 들어있는 미스터리 박스</div>
          </div>
        </div>
        <motion.button
          className="font-hggothicssi-800 text-xl w-[70%] mx-auto mb-4 rounded-xl py-2"
          style={{ display: 'block', backgroundColor: 'rgb(85, 21, 25)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={handleEventEntryClick}
        >
          이벤트 응모하기
        </motion.button>
        <Image src="/netflix-logo.png" alt="netflix" className="mx-auto" width={100} height={50} priority />
      </motion.footer>
      <style jsx>{`
        .result-container {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .fade-in {
          opacity: 1;
        }
        .border-white {
          border-color: white;
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
