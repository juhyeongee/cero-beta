import { View, Text, Image } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { FourthContainer, IntroText } from "./Components/Styled";

const Fourth = () => {
  return (
    <FourthContainer>
      <IntroText>14일 후,</IntroText>
      <IntroText>당신의 화분엔</IntroText>
      <IntroText>어떤 꽃이 자라게 될까요?</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="FourthWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="FourthPot" />
      </View>
    </FourthContainer>
  );
};

export default Fourth;
