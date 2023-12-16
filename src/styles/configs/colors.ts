// Main colors
export const mainColor = '#070f10';
export const blackColor = '#000000';
export const whiteColor = '#ffffff';
export const successColor = '#52c41a';
export const warnColor = '#fcb400';
export const infoColor = '#005e73';
export const errorColor = '#f5222d';
export const disabledColor = 'rgba(0, 0, 0, 0.25)';

// Text colors
export const maxGreenTextColor = '#00d993'; // green as code
export const greyTextColor = '#9a9e9f'; // on nav and footer
export const dirtyWhiteTextColor = '#e7e7e8'; // use for white text
export const dirtyGreyTextColor = '#7d8385'; // use for grey text
export const blueTextColor = '#40a9ff'; // on hover

// Common colors
export const maxGreenColor = maxGreenTextColor; // max green
export const middleGreenColor = '#122322'; // middle green
export const minGreenColor = mainColor; // min green, the darkest
export const yellowColor = '#ffb718'; // yellow
export const pinkColor = '#ff6286'; // red or pink
export const elementsGreyColor = '#1b2225'; // grey for elements of design: borders, deviders and so on
export const inputDarkGreyColor = '#2c3335'; // dark grey-green color for input
export const inputFocusedGreenColor = '#008c5b'; // light greeen color input:focus
export const backgroundElementColor = '#0e1618'; // background for images, blocks, elements
export const getInTouchBlockBackgroundColor = '#1a2225'; // background for Get in touch block

// Button colors
export const buttonBackgroundColor = '#122322';
export const buttonHoverColor = '#0f382e';

// Box-shadow
export const navBoxShadow = `0px 2.188px 4.625px #00000021,0px 10px 13px #00000033,0px 25.313px 34.875px #00000045,0px 50px 80px #00000066`;
export const quadrateBoxSadow = `0px 0px 20px 5px ${blackColor}`;

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
  green: maxGreenTextColor,
};
