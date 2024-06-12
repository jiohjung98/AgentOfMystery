import Head from 'next/head';
import { useState } from 'react';
import Question1 from '@/components/Question1';
import Question2 from '@/components/Question2';
import Question3 from '@/components/Question3';
import Question4 from '@/components/Question4';
import Question5 from '@/components/Question5';
import Question6 from '@/components/Question6';
import Question7 from '@/components/Question7';
import Image from 'next/image';

type Score = {
  [key: string]: number;
};

const Quiz = () => {
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

  console.log(score);

  return (
    <div className="min-h-screen flex flex-col main-page justify-center items-center">
      <Head>
        <title>Agent of Mystery - 퀴즈</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-4 text-center">
        {currentQuestion === 1 && <Question1 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 2 && <Question2 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 3 && <Question3 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 4 && <Question4 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 5 && <Question5 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 6 && <Question6 handleAnswerSelect={handleAnswerSelect} />}
        {currentQuestion === 7 && <Question7 handleAnswerSelect={handleAnswerSelect} />}
      </main>
      <footer className="text-center pb-6 items-center">
        <Image src='/netflix-logo.png' alt='netflix' className='mx-auto' width={100} height={50} loading='lazy'></Image>
      </footer>
    </div>
  );
};

export default Quiz;
