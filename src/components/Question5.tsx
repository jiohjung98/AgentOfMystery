import React, { useState } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question5: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);

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
        >
          <QuestionLayout
            questionNumber="Q.5"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                  비밀의 방 속에 갇힌 미스터리 수사단!<br />
                  탈출을 도와줄 단서를 찾았다.<br />
                  그런데 단서를 발견한 장소는 위험하다.
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  단서를 얻기 위해 내가 할 행동은?
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
          <div className='page-count'>5 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 위험을 감수하고 단서를 챙긴다.';
    case '존박':
      return '② 모두의 안전을 위해 단서를 포기한다.';
    case '도훈':
      return '③ 어차피 다 같이 탈출할 거니까 기다린다.';
    case '은지':
      return '④ 다른 사람들이 안전하게 탈출하도록 지원한다.';
    case '카리나':
      return '⑤ 나의 특기를 활용해 안전하게 단서를 챙긴다.';
    case '용진':
      return '⑥ 단서를 챙기기 위해 계획적으로 행동한다.';
    default:
      return '';
  }
};

export default Question5;
