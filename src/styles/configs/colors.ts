// Main colors
export const mainColor = '#060f11';
export const blackColor = '#000000';
export const whiteColor = '#ffffff';
export const successColor = '#52c41a';
export const warnColor = '#fcb400';
export const infoColor = '#005e73';
export const errorColor = '#f5222d';
export const disabledColor = 'rgba(0, 0, 0, 0.25)';

// Text colors
export const maxGreenTextColor = '#00d993'; // green as code
export const greyTextColor = '#e4e4e6'; // on nav
export const dirtyWhiteTextColor = '#e7e7e8'; // use for white text
export const dirtyGreyTextColor = '#7d8385'; // grey text

// Common colors
export const maxGreenColor = maxGreenTextColor; // max green
export const middleGreenColor = '#122322'; // middle green
export const minGreenColor = mainColor; // min green, the darkest 
export const yellowColor = '#ffb718'; // yellow
export const pinkColor = '#ff6286'; // red or pink


// Components like Typography or Icon handles colors from object below
// so to add color to such components you just need to add color here
export const app_colors = {
  main: mainColor,
  black: blackColor,
  white: whiteColor,
  disabled: disabledColor,
  error: errorColor,
  success: successColor,
  warn: warnColor,
  info: infoColor,
  transparent: 'inherit',
  lightGreenTextColor: maxGreenTextColor,
};
