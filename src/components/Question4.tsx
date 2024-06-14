import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question4: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [characters, setCharacters] = useState<string[]>(['혜리', '존박', '도훈', '은지', '카리나', '용진']);

  useEffect(() => {
    setCharacters((prevCharacters) => prevCharacters.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setTextVisible(true), 1100);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (character: string) => {
    setSelected(character);
    setTimeout(() => handleAnswerSelect(character), 500);
  };

  return (
    <AnimatePresence>
      {currentQuestion === 4 && (
        <motion.div
          key="question4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.4"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  수사 도중 비밀의 방을 발견한 미스터리 수사단!<br />
                  비밀의 방 앞에 있는 의문의 버튼을 발견한다.<br />
                  누르면 들어갈 수 있는 건가...?
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  이때 나는 어떻게 해야 할까?
                </motion.h2>
              </>
            }
          >
            {textVisible && (
              <>
                {characters.map((character, index) => (
                  <motion.button
                    key={index}
                    className={`bg-white text-black text-base py-2 pl-2 rounded-lg w-full text-left button-style ${
                      selected === character ? 'scale-105' : ''
                    }`}
                    onClick={() => handleClick(character)}
                    whileHover={{ y: -5 }}
                    animate={{
                      scale: selected === character ? 1.05 : 1,
                      opacity: selected && selected !== character ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    dangerouslySetInnerHTML={{ __html: `${index === 0 ? '① ' : index === 1 ? '② ' : index === 2 ? '③ ' : index === 3 ? '④ ' : index === 4 ? '⑤ ' : index === 5 ? '⑥ ' : ''}${getButtonText(character)}` }}
                  />
                ))}
              </>
            )}
          </QuestionLayout>
          <div className="page-count font-hggothicssi-400">4 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '어, 이거 단서 아냐? 사진 먼저 찍을게.';
    case '존박':
      return '버튼 누르기 전에 한 명이 망보고 있자.';
    case '도훈':
      return '잠깐만! 누군가 우리를 지켜보고 있는 것 같지 않아?';
    case '은지':
      return '누르지 말자...ㅠㅠ 누를 거면 나는 빼줘...';
    case '카리나':
      return '다들 어떻게 생각해? 난 상관없어.';
    case '용진':
      return '저거 누가 봐도 누르라는 거 아냐?';
    default:
      return '';
  }
};

export default Question4;
