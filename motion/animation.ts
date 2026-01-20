import { Variants, Transition } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0,
): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideInLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const scaleUp: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: (i: number = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.1,
    },
  }),
};

export const backgroundImageAnimation = {
  initial: {
    scale: 1.1,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: 1.2,
    ease: "easeOut" as const,
  },
};

export const overlayAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.8,
    delay: 0.3,
  },
};

export const decorativeLineAnimation = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
  },
  transition: {
    duration: 1.5,
    delay: 2,
    ease: "easeInOut" as const,
  },
};

export const particleAnimation = (i: number) => ({
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: [0, -30, 0],
    opacity: [0, 0.5, 0],
  },
  transition: {
    duration: 3 + i,
    repeat: Infinity,
    delay: i * 0.5,
    ease: "easeInOut" as const,
  },
});

export const scrollIndicatorAnimation = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 2.5,
    duration: 0.8,
  },
};
