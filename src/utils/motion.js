export const transition = {
  type: "spring",
  duration: 0.7, // Slightly faster base duration
  damping: 12,   // Controls the oscillation - higher damping means less bounce
  stiffness: 120, // Controls the stiffness of the spring - higher means snappier
  mass: 1,      // Controls the "weight" of the animation
  restDelta: 0.001, // Smallest movement value to consider animation complete
};

/**
 * Slide animation for elements entering/exiting from a direction.
 * Includes a subtle scale and fade for a more dynamic entrance.
 * @param {string} direction - 'left', 'right', 'up', 'down'
 */
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -150 : direction === "right" ? 150 : 0, // Increased initial displacement
      y: direction === "up" ? 150 : direction === "down" ? -150 : 0,  // Increased initial displacement
      opacity: 0,
      scale: 0.95, // Start slightly scaled down
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1, // Animate to full scale
      transition: {
        ...transition,
        delay: 0, // No delay on animate for immediate appearance
        ease: "easeOut", // Use ease-out for a smooth deceleration
      },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      scale: 0.9, // Scale down slightly on exit
      transition: { ...transition, delay: 0 },
    },
  };
};

/**
 * Fade animation with a subtle scale for a more engaging reveal.
 */
export const fadeAnimation = {
  initial: {
    opacity: 0,
    scale: 0.98, // Start slightly scaled down for a "pop-in" effect
  },
  animate: {
    opacity: 1,
    scale: 1, // Animate to full scale
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    scale: 0.98, // Scale down slightly on exit
    transition: { ...transition, delay: 0 },
  },
};

/**
 * Animation for main heading text. Quicker, punchier entrance.
 */
export const headTextAnimation = {
  initial: { x: 120, opacity: 0 }, // Slightly increased initial x for more noticeable slide
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,   // Less damping for a quicker bounce
    stiffness: 150, // Higher stiffness for a snappier feel
    restDelta: 0.001,
    duration: 0.4, // Faster overall duration
  },
};

/**
 * Animation for supporting content below headings.
 * Slightly delayed to follow the main text, with a smooth rise.
 */
export const headContentAnimation = {
  initial: { y: 120, opacity: 0 }, // Slightly increased initial y
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 10,  // Balanced damping
    stiffness: 80, // Slightly softer spring than text for a gentler rise
    restDelta: 0.001,
    duration: 0.7, // Moderate duration
    delay: 0.2, // Small delay to follow headTextAnimation
    delayChildren: 0.1, // Delay for child elements within this container
  },
};

/**
 * Animation for an entire container, often used for sections or major blocks.
 * Smooth slide-in from the left.
 */
export const headContainerAnimation = {
  initial: { x: -150, opacity: 0 }, // Increased initial x for a clearer entrance
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0.1 } }, // Slight delay on animate for natural flow
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
