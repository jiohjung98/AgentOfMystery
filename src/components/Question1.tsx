import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question1: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
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
      {currentQuestion === 1 && (
        <motion.div
          key="question1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.1"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  드디어 꿈에 그리던 <br />
                  미스터리 수사단에 합류하게 된 당신!!<br />
                  불가사의하고 초자연적인 <br />
                  미션을 해결해야 한다.
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  이때 내가 되고 싶은 <br /> 수사단원은?
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
                  >
                    {index === 0 ? `① ${getButtonText(character)}` : index === 1 ? `② ${getButtonText(character)}` : index === 2 ? `③ ${getButtonText(character)}` : index === 3 ? `④ ${getButtonText(character)}` : index === 4 ? `⑤ ${getButtonText(character)}` : index === 5 ? `⑥ ${getButtonText(character)}` : getButtonText(character)}
                  </motion.button>
                ))}
              </>
            )}
          </QuestionLayout>
          <div className='page-count font-hggothicssi-400'>1 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '적극적인 태도가 돋보이는 노력파';
    case '존박':
      return '어떤 문제든 척척 풀어내는 브레인';
    case '도훈':
      return '열정만큼 몸부터 앞서는 행동파';
    case '은지':
      return '공감능력 탑재한 분위기 메이커';
    case '카리나':
      return '없는 게 없는 보부상';
    case '용진':
      return '모두가 기댈 수 있는 리더';
    default:
      return '';
  }
};

export default Question1;
