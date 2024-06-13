import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question1: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);

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
        >
          <QuestionLayout
            questionNumber="Q.1"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                드디어 꿈에 그리던 <br />
                미스터리 수사단에 합류하게 당신!!<br/>
                불가사의하고 초자연적인 <br />
                미션을 해결해야 한다.                
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                이때 내가 되고 싶은 <br /> 수사단원은?
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
                animate={{ opacity: selected && selected !== character ? 0.5 : 1 }}
              >
                {getButtonText(character)}
              </motion.button>
            ))}
          </QuestionLayout>
          <div className='page-count'>1 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 현장을 정리하고 증거를 수집한다.';
    case '존박':
      return '② 피해자의 상태를 확인한다.';
    case '도훈':
      return '③ 주변 사람들에게 질문을 던진다.';
    case '은지':
      return '④ 사건을 해결할 단서를 찾아 나선다.';
    case '카리나':
      return '⑤ 팀원들과 작전을 세운다.';
    case '용진':
      return '⑥ 경찰에 연락하여 지원을 요청한다.';
    default:
      return '';
  }
};

export default Question1;
