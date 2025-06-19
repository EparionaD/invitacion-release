import Flor from '@/public/flores/flor4.svg';

interface FlorProps {
  className?: string;
}

const FlorAzul = ({ className }: FlorProps) => {
  return (
    <div className={className} style={{ position: 'absolute', zIndex: -1 }}>
      <Flor />
    </div>
  );
};

export default FlorAzul;
