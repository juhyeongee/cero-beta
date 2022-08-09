import { View, Text, Image } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { ThirdContainer, IntroText } from "./Components/Styled";

const Third = () => {
  return (
    <ThirdContainer>
      <IntroText>이곳에선 모두가</IntroText>
      <IntroText>화분에 마음을 담아,</IntroText>
      <IntroText>자신만의 씨앗을 틔웁니다.</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="ThirdWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="ThirdPot" />
      </View>
    </ThirdContainer>
  );
};

export default Third;
