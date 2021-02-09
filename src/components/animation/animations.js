export const delayFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};

export const leftToCenter = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: 'easeOut',
    },
  },
};

export const rightToCenter = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: 'easeOut',
    },
  },
};

export const leftToCenterStagger = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};
