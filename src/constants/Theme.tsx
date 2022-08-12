import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./properties";

const Theme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    n0: "#FFFFFF",
    n50: "#FAFAFA",
    n100: "#F1F3F6",
    n200: "#EBEEF2",
    n300: "#E4E7ED",
    n400: "#DCE0E8",
    n500: "#D5DAE3",
    n600: "#C7CCD4",
    n700: "#A3A7AF",
    n800: "#4E5054",
    n900: "#333537",
    primary: "#40B08F",
    mildgreen: "#D4F8E9",
    cautionYellow: "#FFE8BA",
    blue: "#3D81BB",
    errorRed: "#E26D66",
  },
  introBgColor: {
    firstBg: "#2F3134",
    secondBg: "#383A3E",
    thirdBg: "#3C3E42",
    fourthBg: "#4A4C50",
    fifthBg: "#63656A",
  },

  length: { windowWidth: WINDOW_WIDTH, windowHeight: WINDOW_HEIGHT },
  font: {
    androidThickFont: "GothicA1_600SemiBold",
    androidFont: "GothicA1_400Regular",
    mainFont: "NotoSansKR_400Regular",
    thickFont: "NotoSansKR_500Medium",
    thinFont: "NotoSansKR_100Thin",
  },
};

export default Theme;
