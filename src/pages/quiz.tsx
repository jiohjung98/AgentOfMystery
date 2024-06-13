import Head from 'next/head';
import { useState } from 'react';
import Background from '@/components/Background';
import Question1 from '@/components/Question1';
import Question2 from '@/components/Question2';
import Question3 from '@/components/Question3';
import Question4 from '@/components/Question4';
import Question5 from '@/components/Question5';
import Question6 from '@/components/Question6';
import Question7 from '@/components/Question7';
import HyeriResult from '@/components/result/HyeriResult';
import JohnParkResult from '@/components/result/JohnParkResult';
import DoHunResult from '@/components/result/DoHunResult';
import EunJiResult from '@/components/result/EunJiResult';
import KarinaResult from '@/components/result/KarinaResult';
import YongJinResult from '@/components/result/YongJinResult';
import Image from 'next/image';

type Score = {
  [key: string]: number;
};

type QuizProps = {
  backgroundUrl: string;
};

const Quiz: React.FC<QuizProps> = ({ backgroundUrl }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState<Score>({
    혜리: 0,
    존박: 0,
    도훈: 0,
    은지: 0,
    카리나: 0,
    용진: 0,
  });

  const handleAnswerSelect = (character: string) => {
    setScore((prevScore) => ({
      ...prevScore,
      [character]: (prevScore[character] || 0) + 1,
    }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const getMaxCharacter = () => {
    const maxScore = Math.max(...Object.values(score));
    const maxCharacters = Object.keys(score).filter((key) => score[key] === maxScore);
    return maxCharacters[Math.floor(Math.random() * maxCharacters.length)];
  };

  if (currentQuestion > 7) {
    const maxCharacter = getMaxCharacter();
    switch (maxCharacter) {
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
  }

  return (
    <div className="max-w-[500px] flex flex-col main-page justify-center items-center mx-auto">
      <Head>
        <title>미스테리 수사단원 검증 미션</title>
        <meta name="description" content="Your description here" />
      </Head>
      <Background backgroundUrl={backgroundUrl} />
      <main className="flex-grow flex flex-col items-center h-[100%] px-4 pt-4 text-center relative z-10">
        {currentQuestion === 1 && <Question1 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 2 && <Question2 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 3 && <Question3 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 4 && <Question4 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 5 && <Question5 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 6 && <Question6 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 7 && <Question7 handleAnswerSelect={handleAnswerSelect} />}
      </main>
      <footer className="text-center py-4 items-center relative z-10">
        <Image src='/netflix-logo.png' alt='netflix' className='mx-auto' width={100} height={50} priority />
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const backgroundUrl = '/background-main.png';

  return {
    props: {
      backgroundUrl,
    },
  };
};

export default Quiz;
