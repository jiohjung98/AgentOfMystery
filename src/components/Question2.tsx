import React, { useState, useEffect } from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question2: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
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
      {currentQuestion === 2 && (
        <motion.div
          key="question2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <QuestionLayout
            questionNumber="Q.2"
            questionText={
              <>
                <motion.p
                  className="font-hggothicssi-700 text-white text-sm leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  본격적인 추리를 앞둔 미스터리 수사단!<br />
                  아직 아무런 정보도 주어지지 않았는데...
                </motion.p>
                <motion.h2
                  className="font-hggothicssi-800 text-white text-2xl font-bold my-4 text-center leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  수사 전, 어떤 걸 준비해야 할까?
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
          <div className="page-count font-hggothicssi-400">2 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '충분한 숙면은 필수! 전 날 밤, 푹 자고 온다.';
    case '존박':
      return '슬쩍- 안 주머니로 몰래 휴대폰을 숨겨둔다.';
    case '도훈':
      return '장갑... 노트... 왠지 필요할 것 같은 실용적인 물건을 챙긴다.';
    case '은지':
      return '아무래도 체면은 지켜야지. 간단한 화장품을 챙긴다.';
    case '카리나':
      return '마음가짐 준비 완료. 동료들에게 도움이 되겠다고<br />결심한다.';
    case '용진':
      return '머리 쓰면 당 떨어져... 초콜릿을 챙긴다.';
    default:
      return '';
  }
};


export default Question2;
