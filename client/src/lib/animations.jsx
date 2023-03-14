export const backdropVariants = {
  expanded: {
    width: '100%',
    height: '1000px',
    borderRadius: '20%',
    transform: 'rotate(-13deg)',
  },
  collapsed: {
    width: '160%',
    height: '510px',
    borderRadius: '50%',
    transform: 'rotate(-13deg)',
  },
};

export const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
  height: '1000px',
};
export const ani_container = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};
export const ani_header = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const ani_img = {
  initial: { x: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
