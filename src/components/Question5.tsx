import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question5: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
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
      {currentQuestion === 5 && (
        <motion.div
          key="question5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.5"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  고지가 눈앞! 이제 탈출만 남은 상황이다.<br />
                  그 순간, 범인이 들이닥쳤다!<br />
                  범인들에게 순식간에 포위된 미스터리 수사단.
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  끌려가기 일보직전인 지금,<br/>가장 먼저 드는 생각은?
                </motion.h2>
              </>
            }
          >
            {textVisible && (
              <>
                 {characters.map((character, index) => (
                  <motion.button
                    key={index}
                    className={`font-hggothicssi-800 bg-white text-black text-base py-2 pl-2 rounded-lg w-full text-left button-style ${
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
          <div className="page-count font-hggothicssi-400">5 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '이정도 시련쯤이야, 얼른 탈출할 수 있어!';
    case '존박':
      return '이게 무슨 상황이지...?';
    case '도훈':
      return '아니 이걸 걸렸다고? 아 진짜 아쉽다...';
    case '은지':
      return '다른 동료들은 괜찮나?';
    case '카리나':
      return '살려주세요 살려주세요 (멘붕으로 사고력 정지)';
    case '용진':
      return '미운 놈 떡 하나 더 줄 수 있으니 대화를<br/>시도해볼까?';
    default:
      return '';
  }
};

export default Question5;
