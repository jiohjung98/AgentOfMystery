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
          className="w-full" 
        >
          <QuestionLayout
            questionNumber="Q.1"
            questionText={
              <>
                <p className="font-hggothicssi-700 text-white text-sm leading-relaxed">
                  드디어 꿈에 그리던 <br />
                  미스터리 수사단에 합류하게 된 당신!!<br/>
                  불가사의하고 초자연적인 <br />
                  미션을 해결해야 한다.                
                </p>
                <h2 className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug">
                  이때 내가 되고 싶은 <br /> 수사단원은?
                </h2>
              </>
            }
          >
            {['혜리', '존박', '도훈', '은지', '카리나', '용진'].map((character, index) => (
              <motion.button
                key={index}
                className={`bg-white text-black text-lg py-2 px-2 rounded-lg w-full text-left button-style ${
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
          <div className='page-count font-hggothicssi-400'>1 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 적극적인 태도가 돋보이는 노력파';
    case '존박':
      return '② 어떤 문제든 척척 풀어내는 브레인';
    case '도훈':
      return '③ 열정만큼 몸부터 앞서는 행동파';
    case '은지':
      return '④ 공감능력 탑재한 분위기 메이커';
    case '카리나':
      return '⑤ 없는 게 없는 보부상';
    case '용진':
      return '⑥ 모두가 기댈 수 있는 리더';
    default:
      return '';
  }
};

export default Question1;
