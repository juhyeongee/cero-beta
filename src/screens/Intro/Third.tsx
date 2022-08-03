import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import SvgIcon from "@assets/SvgIcon";

interface IContainerProps {
  theme: ITheme;
}

const Third = () => {
  return (
    <Container>
      <IntroText>이곳에선 모두가</IntroText>
      <IntroText>화분에 마음을 담아,</IntroText>
      <IntroText>자신만의 씨앗을 틔웁니다.</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="ThirdWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="ThirdPot" />
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.thirdPg};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont}; ;
`;

export default Third;
