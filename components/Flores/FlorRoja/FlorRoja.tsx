import Flor from '@/public/flores/flor.svg';

interface FlorProps {
  className?: string;
}

const FlorRoja = ({ className }: FlorProps) => {
  return (
    <div className={className} style={{ position: 'absolute', zIndex: -1 }}>
      <Flor />
    </div>
  );
};

export default FlorRoja;
