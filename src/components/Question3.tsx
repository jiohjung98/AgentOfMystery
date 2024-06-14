import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question3: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
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
      {currentQuestion === 3 && (
        <motion.div
          key="question3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.3"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  문제 해결에 한창인 도중,<br />동료가 아닌 낯선 인기척이 느껴졌다! <br />
                  낯선 사람의 발소리가 점점 커지는데!
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  긴박한 순간, 나는...
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
          <div className="page-count font-hggothicssi-400">3 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '허둥지둥 대다 결국 숨지 못한다.';
    case '존박':
      return '멀어도 가장 안심할 수 있는 확실한 공간으로 몸을 숨긴다.';
    case '도훈':
      return '문 틈 사이에 낀 손가락, 어설프게 숨는다.';
    case '은지':
      return '불안한 마음에 몸이 얼어붙는다.';
    case '카리나':
      return '가장 가까운 공간으로 재빨리 몸을 숨긴다.';
    case '용진':
      return '긴박한 순간에서도 동료들의 안전을 살핀다.';
    default:
      return '';
  }
};

export default Question3;
