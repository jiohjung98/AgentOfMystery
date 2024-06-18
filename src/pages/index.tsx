import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Background from '@/components/Background';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type HomeProps = {
  backgroundUrl: string;
};

const Home: React.FC<HomeProps> = ({ backgroundUrl }) => {
  const [startClicked, setStartClicked] = useState(false);
  const router = useRouter();
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentVisible(true);
    }, 1500);
    
    // Update vh unit for mobile browsers
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);

    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  const handleStartClick = () => {
    setStartClicked(true);
    setTimeout(() => {
      router.push('/quiz');
    }, 500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="max-w-[500px] min-h-screen flex flex-col start-page text-white mx-auto start-font relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>미스터리 수사단원 검증 미션</title>
          <meta name="description" content="Agent Of Mystery" />
          <meta property="og:title" content="미스터리 수사단원 검증 미션" />
          <meta property="og:description" content="검증 미션 시작하기" />
          <meta property="og:image" content="https://agent-of-mystery.vercel.app/mainlogo3.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:url" content="https://agent-of-mystery.vercel.app/" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="미스터리 수사단원 검증 미션" />
          <meta name="twitter:description" content="검증 미션 시작하기" />
          <meta name="twitter:image" content="https://agent-of-mystery.vercel.app/mainlogo2.png" />
          <meta name="twitter:url" content="https://agent-of-mystery.vercel.app/" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Background backgroundUrl={backgroundUrl} />
        <main className="main-content flex-grow flex flex-col h-full items-center mx-auto px-4 py-4 text-center z-[1]">
          <motion.h1
            className="font-hggothicssi-800 text-3xl mt-[10px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }} 
          >
            무정부 국제 조직 XIN <br />( <span className="text-red-700">X </span><span className="text-red-700">I</span>nvestigation <span className="text-red-700">N</span>etwork )
          </motion.h1>
          <motion.p
            className="font-hggothicssi-700 text-lg leading-relaxed mt-8 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }} 
          >
            지구 상에서 일어나는 모든 미스터리한<br />일들을 해결하는 비밀 조직 <span className="text-red-700">XIN</span>.<br />
            인류가 지금까지 발견하지 못한<br />X-전파를 통해 각종 사건을 수사한다.<br /><br />
            수사단 최정예 요원이 되기까지,<br />마지막 한 단계만 남았다!<br />
            현장에 투입된 나와 가장 닮은<br />미스터리 수사단원은?
          </motion.p>
          {!startClicked && (
          <motion.div
            className="absolute bottom-16 w-full px-6 z-[1]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={handleStartClick}
              className="text-2xl red-button w-[90%] mx-auto"
              style={{ display: 'block' }}
            >
              검증 미션 시작하기
            </button>
          </motion.div>
        )}
        </main>
        <footer className="text-center pb-4 items-center z-10 w-full">
          <Image src='/netflix-logo.png' alt='netflix' className='mx-auto' width={100} height={50} priority />
        </footer>
        <style jsx>{`
          .main-content {
            margin-top: 140px;
            padding-bottom: 60px;
          }

          @media (min-height: 900px) {
            .main-content {
              margin-top: 160px;22
            }
          }

          @media (min-height: 1000px) {
            .main-content {
              margin-top: 180px;
            }
          }

          .border-white {
            border-color: white;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
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
