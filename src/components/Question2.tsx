import React from 'react';
import QuestionLayout from './QuestionLayout';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  handleAnswerSelect: (character: string) => void;
  currentQuestion: number;
}

const Question2: React.FC<Props> = ({ handleAnswerSelect, currentQuestion }) => {
  const [selected, setSelected] = React.useState<string | null>(null);

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
        >
          <QuestionLayout
            questionNumber="Q.2"
            questionText={
              <>
                <p className="text-white text-sm leading-relaxed">
                  본격적인 추리를 앞둔 미스터리 수사단! <br />
                  아직 아무런 정보도 주어지지 않았는데...<br />
                </p>
                <h2 className="text-white text-2xl font-bold my-4 text-center leading-snug">
                  수사 전, 어떤 걸 준비해야 할까?
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
          <div className='page-count'>2 / 7</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getButtonText = (character: string) => {
  switch (character) {
    case '혜리':
      return '① 충분한 숙면은 필수! 전 날 밤, 푹 자고 온다.';
    case '존박':
      return '② 슬쩍- 안 주머니로 몰래 휴대폰을 숨겨둔다.';
    case '도훈':
      return  (
        <>③ 장갑... 노트... 왠지 필요할 것 같은 실용적인 물건을 챙긴다.
        </>
      )
    case '은지':
      return  (
        <>④ 아무래도 체면은 지켜야지. 간단한 화장품을 챙긴다.
        </>
      )
    case '카리나':
      return  (
        <>⑤ 마음가짐 준비 완료. 동료들에게 도움이 되겠다고 결심한다.
        </>
      )
    case '용진':
      return '⑥ 머리 쓰면 당 떨어져... 초콜릿을 챙긴다.';
    default:
      return '';
  }
};

export default Question2;
