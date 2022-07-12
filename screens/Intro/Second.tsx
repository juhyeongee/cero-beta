import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";
import SvgIcon from "../../assets/SvgIcon";

interface IContainerProps {
  theme?: ITheme;
}

const Second = () => {
  return (
    <Container>
      <IntroText>혼자가 된 사람들을 위한</IntroText>
      <IntroText>비밀의 방에 오신 것을 환영합니다.</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="SecondWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="SecondPot" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}></View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme?.introBgColor.secondPg};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default Second;
