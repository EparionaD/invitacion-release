import Flor from '@/public/flores/flor1.svg';

interface FlorProps {
  className?: string;
}

const FlorAmarilla = ({ className }: FlorProps) => {
  return (
    <div className={className} style={{ position: 'absolute', zIndex: -1 }}>
      <Flor />
    </div>
  );
};

export default FlorAmarilla;
