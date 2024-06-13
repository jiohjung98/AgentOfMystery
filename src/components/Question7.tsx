import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question7: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (character: string) => {
    setSelected(character);
    setTimeout(() => handleAnswerSelect(character), 500); 
  };

  return (
    <AnimatePresence>
      {currentQuestion === 7 && (
        <motion.div
          key="question7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionLayout
            questionNumber="Q.7"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                  비밀의 방에서 탈출한 후,<br />
                  다시 되돌아가기 위한 길이 막혔다!<br />
                  다시 되돌아가기 위한 방법은?
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  나의 선택은?
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
      return '① 직접 되돌아가는 방법을 찾는다.';
    case '존박':
      return '② 다른 사람들과 함께 되돌아가는 방법을 찾는다.';
    case '도훈':
      return '③ 어떻게든 되돌아가는 방법을 찾는다.';
    case '은지':
      return '④ 동료들과 함께 논의하여 결정한다.';
    case '카리나':
      return '⑤ 나의 아이디어를 제시하여 해결책을 찾는다.';
    case '용진':
      return '⑥ 팀원들과 협력하여 가장 좋은 방법을 결정한다.';
    default:
      return '';
  }
};

export default Question7;
