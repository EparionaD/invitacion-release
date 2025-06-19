import Flor from '@/public/flores/flor2.svg';

interface FlorProps {
  className?: string;
}

const FlorYellow = ({ className }: FlorProps) => {
  return (
    <div className={className} style={{ position: 'absolute', zIndex: -1 }}>
      <Flor />
    </div>
  );
};

export default FlorYellow;
