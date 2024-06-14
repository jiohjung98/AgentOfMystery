import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question7: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [textVisible, setTextVisible] = useState(false);

  const handleClick = (character: string) => {
    setSelected(character);
    setTimeout(() => handleAnswerSelect(character), 500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setTextVisible(true), 1100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {currentQuestion === 7 && (
        <motion.div
          key="question7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.7"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  심해 깊은 곳에 있는 잠수함으로 수사를 하러 갔다.<br />
                  그런데, 갑자기 여기저기서 울리는 사이렌!<br />
                  어어... 어....? 갑자기 잠수함이 기울어진다!
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  이때 나는...
                </motion.h2>
              </>
            }
          >
            {textVisible && (
              <>
                {['혜리', '존박', '도훈', '은지', '카리나', '용진'].map((character, index) => (
                  <motion.button
                    key={index}
                    className={`bg-white text-black text-base py-2 px-4 rounded-lg w-full text-left button-style ${
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
                  >
                    {getButtonText(character)}
                  </motion.button>
                ))}
              </>
            )}
          </QuestionLayout>
          <div className="page-count font-hggothicssi-400">7 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return (
        <>① 이 상황을 해결하기 위해, 앞서 찍어뒀던<br />단서들을 꺼내본다.</>
      );
    case '존박':
      return (
        <>② 반대편으로 미끄러지는 친구를 긴 팔로<br /> 붙잡아준다.</>
      );
    case '도훈':
     

      return  (
        <>③ 생각할 시간은 없어! 일단 눈 앞에 보이는<br/>밸브를 돌려본다.
        </>
      )
    case '은지':
      return (
        <>④ 얘들아, 괜찮아? 빨리 안전바 잡아! 나도<br/>힘들지만 동료들의 안전을 챙겨준다.
        </>
      )
    case '카리나':
      return (
        <>⑤ ...이게 무슨 일이지? 몸을 움츠리고 멍하니<br/>상황을 바라본다.
        </>
      )
    case '용진':
      return (
        <>⑥ 일단 밸브를 오른쪽으로 돌려 봐! 상황을<br/>전달해준다.
        </>
      )
    default:
      return '';
  }
};

export default Question7;
