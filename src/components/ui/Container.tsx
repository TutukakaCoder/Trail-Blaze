import { clsx } from 'clsx';
import { containerVariants } from '@/lib/constants/spacing';

interface ContainerProps {
  children: React.ReactNode;
  variant?: keyof typeof containerVariants;
  className?: string;
}

const Container = ({
  children,
  variant = 'default',
  className
}: ContainerProps) => {
  return (
    <div className={clsx(containerVariants[variant], className)}>
      {children}
    </div>
  );
};

export default Container; 