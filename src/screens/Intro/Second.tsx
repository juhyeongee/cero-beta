import { View, Text, Image } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { SecondContainer, IntroText } from "./Components/Styled";

const Second = () => {
  return (
    <SecondContainer>
      <IntroText style={{ includeFontPadding: false }}>
        혼자가 된 사람들을 위한
      </IntroText>
      <IntroText style={{ includeFontPadding: false }}>
        비밀의 방에 오신 것을 환영합니다.
      </IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="SecondWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="SecondPot" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}></View>
    </SecondContainer>
  );
};

export default Second;
