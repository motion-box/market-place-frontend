export const ANIMATION_TRANSITION = {
  duration: 0.2,
  ease: "linear",
};

export const FADE_BOTTOM_ANIMATION = {
  hidden: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
  active: {
    opacity: 1,
    y: 0,
    transition: ANIMATION_TRANSITION,
  },
};

export const FADE_SCALE_ANIMATION = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: ANIMATION_TRANSITION,
  },
  active: {
    opacity: 1,
    scale: 1,
    transition: ANIMATION_TRANSITION,
  },
};

export const DIALOG_SLIDE_ANIMATION = {
  left_hidden: {
    opacity: 0,
    x: -376,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
  right_hidden: {
    opacity: 0,
    x: 376,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
};

export const BOTTOM_SHEET_SLIDE_ANIMATION = {
  active: {
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hidden: {
    y: "100vh",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
