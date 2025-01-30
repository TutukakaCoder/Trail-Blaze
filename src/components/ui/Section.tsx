import { clsx } from 'clsx';
import { sectionSpacing } from '@/lib/constants/spacing';

interface SectionProps {
  children: React.ReactNode;
  spacing?: keyof typeof sectionSpacing;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  spacing = 'default',
  className,
  id
}: SectionProps) => {
  return (
    <section id={id} className={clsx(sectionSpacing[spacing], className)}>
      {children}
    </section>
  );
};

export default Section; 