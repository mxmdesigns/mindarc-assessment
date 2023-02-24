export const colors = {
  orange: "#F1592A",
  blue: "#0F75BC",
};

export const breakpoints = {
  xs: 380,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const createMediaQuery = (breakpoint) => {
  if (!breakpoints[breakpoint]) {
    throw new Error(`Invalid breakpoint: ${breakpoint}`);
  }
  return `@media only screen and (min-width: ${breakpoints[breakpoint]}px)`;
};
