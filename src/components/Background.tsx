import Image from 'next/image';

type BackgroundProps = {
  backgroundUrl: string;
};

const Background: React.FC<BackgroundProps> = ({ backgroundUrl }) => {
  return (
    <div className="absolute inset-0 z-0 main-background">
      <Image
        src={backgroundUrl}
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
};

export default Background;
