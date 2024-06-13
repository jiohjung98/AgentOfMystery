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
                  사라진 실종자 6명을 찾고 있는 미스터리 수사단!<br />
                  다음 장소로 이동하려고 문을 열었는데,<br />
                  복도에 시체 한 구가 널브러져 있었다.<br/>
                  자세히 보니 머리 없는 시체…?!
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  이 때 나는...
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
          <div className='page-count'>6 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 왜 시체에 머리가 없는지 생각해본다. “폭발 사고가 있었나?”';
    case '존박':
      return '② 놀랐지만 어떤 상황인지 조용히 파악해본다. “...”';
    case '도훈':
      return '③ 동료들이 이동할 수 있게 시체를 밖으로 치운다. “읏차-”';
    case '은지':
      return '④ 시체를 보자마자 눈물이 쏟아질 것 같다. “이게 무슨 일이니...”';
    case '카리나':
      return '⑤ 시체 옷을 뒤져서 발견한 물품을 챙겨둔다. “혹시 모르니까~”';
    case '용진':
      return '⑥ 찾고 있는 실종자와 시체의 신원을 대조해본다. “어?! 이 사람은-!”';
    default:
      return '';
  }
};

export default Question6;
