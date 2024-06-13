import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question6: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (character: string) => {
    setSelected(character);
    setTimeout(() => handleAnswerSelect(character), 500); 
  };

  return (
    <AnimatePresence>
      {currentQuestion === 6 && (
        <motion.div
          key="question6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionLayout
            questionNumber="Q.6"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                  비밀의 방에서 탈출을 시도하는 도중,<br />
                  예상치 못한 장애물이 등장한다!<br />
                  이 장애물을 넘기 위해 필요한 것은?
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  나는 어떻게 행동할까?
                </h2>
              </>
            }
          >
            {['혜리', '존박', '도훈', '은지', '카리나', '용진'].map((character, index) => (
              <motion.button
                key={index}
                className={`bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left ${
                  selected === character ? 'scale-105' : ''
                }`}
                onClick={() => handleClick(character)}
                whileHover={{ y: -5 }}
                animate={selected && selected !== character ? { opacity: 0.5 } : { opacity: 1 }}
              >
                {getButtonText(character)}
              </motion.button>
            ))}
          </QuestionLayout>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 그냥 내가 장애물을 넘는다.';
    case '존박':
      return '② 다른 사람들에게 도움을 요청한다.';
    case '도훈':
      return '③ 장애물을 넘기 위한 방법을 계획한다.';
    case '은지':
      return '④ 팀원들이 함께 넘을 수 있도록 도와준다.';
    case '카리나':
      return '⑤ 필요한 장비나 도구를 찾아 사용한다.';
    case '용진':
      return '⑥ 팀원들이 장애물을 넘을 수 있도록 지원한다.';
    default:
      return '';
  }
};

export default Question6;
