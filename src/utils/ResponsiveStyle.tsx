import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

export function widthRatio(width: number): number {
  const ratio = (width / FIGMA_WINDOW_WIDTH) * 100;
  return responsiveScreenWidth(ratio);
}

export function heightRatio(height: number): number {
  const ratio = (height / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveScreenHeight(ratio);
}
export function fontsizeRatio(size: number): number {
  const ratio = size * 0.125;
  return responsiveFontSize(ratio);
}
