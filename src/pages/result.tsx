import { useRouter } from 'next/router';
import HyeriResult from '@/components/result/HyeriResult';
import JohnParkResult from '@/components/result/JohnParkResult';
import DoHunResult from '@/components/result/DoHunResult';
import EunJiResult from '@/components/result/EunJiResult';
import KarinaResult from '@/components/result/KarinaResult';
import YongJinResult from '@/components/result/YongJinResult';
import Head from 'next/head';

const Result = () => {
  const router = useRouter();
  const { character } = router.query;

  const renderResultComponent = () => {
    switch (character) {
      case '혜리':
        return <HyeriResult />;
      case '존박':
        return <JohnParkResult />;
      case '도훈':
        return <DoHunResult />;
      case '은지':
        return <EunJiResult />;
      case '카리나':
        return <KarinaResult />;
      case '용진':
        return <YongJinResult />;
      default:
        return <div>결과를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center result-page">
      {renderResultComponent()}
      <Head>
        <link rel="preload" href="/background-result.png" as="image" />
      </Head>
    </div>
    
  );
};

export default Result;
