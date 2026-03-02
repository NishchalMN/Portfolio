import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
}

const SectionReveal = ({ children }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.75'],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(${v}% 0 0 0)`);

  return (
    <div ref={ref}>
      <motion.div style={{ clipPath, willChange: 'clip-path' }}>
        {children}
      </motion.div>
    </div>
  );
};

export default SectionReveal;
