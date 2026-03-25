'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function AnimatedSection({ children, animation = 'up', delay = 0, className = '', threshold = 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold, margin: '-50px' });
  const controls = useAnimation();

  const animationMap = {
    up: variants.hidden,
    left: fadeLeft.hidden,
    right: fadeRight.hidden,
    scale: scaleUp.hidden,
  };

  const visibleMap = {
    up: variants.visible,
    left: fadeLeft.visible,
    right: fadeRight.visible,
    scale: scaleUp.visible,
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: animationMap[animation], visible: visibleMap[animation] }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}