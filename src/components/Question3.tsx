import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question3: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);

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
        >
          <QuestionLayout
            questionNumber="Q.3"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                  문제 해결에 한창인 도중,<br />동료가 아닌 낯선 인기척이 느껴졌다! <br />
                  낯선 사람의 발소리가 점점 커지는데!
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  긴박한 순간, 나는...
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
      return '① 허둥지둥 대다 결국 숨지 못한다.';
    case '존박':
      return '② 멀어도 가장 안심할 수 있는 확실한<br/>공간으로 몸을 숨긴다.';
    case '도훈':
      return '③ 문 틈 사이에 낀 손가락, 어설프게 숨는다.';
    case '은지':
      return '④ 불안한 마음에 몸이 얼어붙는다.';
    case '카리나':
      return '⑤ 가장 가까운 공간으로 재빨리 몸을 숨긴다.';
    case '용진':
      return '⑥ 긴박한 순간에서도 동료들의 안전을 살핀다.';
    default:
      return '';
  }
};

export default Question3;
