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
                  고지가 눈앞! 이제 탈출만 남은 상황이다.<br />
                  그 순간, 범인이 들이닥쳤다!<br />
                  범인들에게 순식간에 포위된 미스터리 수사단.
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                끌려가기 일보직전인 지금,<br/>가장 먼저 드는 생각은?
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
      return '① 이정도 시련쯤이야, 얼른 탈출할 수 있어!';
    case '존박':
      return '② 이게 무슨 상황이지...?';
    case '도훈':
      return '③ 아니 이걸 걸렸다고? 아 진짜 아쉽다...';
    case '은지':
      return '④ 다른 동료들은 괜찮나?';
    case '카리나':
      return '⑤ 살려주세요 살려주세요 (멘붕으로 사고력 정지)';
    case '용진':
      return '⑥ 미운 놈 떡 하나 더 줄 수 있으니 대화를 시도해볼까?';
    default:
      return '';
  }
};

export default Question5;
