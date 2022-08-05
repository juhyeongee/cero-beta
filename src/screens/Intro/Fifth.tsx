import { View, Text, Image, StyleSheet } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { FifthContainer, IntroText } from "./Components/Styled";

const Fifth = () => {
  return (
    <FifthContainer>
      <IntroText style={{ includeFontPadding: false }}>어서오세요.</IntroText>
      <IntroText>지금은 새로 시작할 시간입니다</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="FifthWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="FifthPot" />
      </View>
    </FifthContainer>
  );
};

export default Fifth;
