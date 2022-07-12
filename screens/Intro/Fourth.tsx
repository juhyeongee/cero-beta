import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";
import SvgIcon from "../../assets/SvgIcon";

interface IContainerProps {
  theme?: ITheme;
}

const Fourth = () => {
  return (
    <Container>
      <IntroText>14일 후,</IntroText>
      <IntroText>당신의 화분엔</IntroText>
      <IntroText>어떤 꽃이 자라게 될까요?</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="FourthWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="FourthPot" />
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme?.introBgColor.fourthPg};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default Fourth;
