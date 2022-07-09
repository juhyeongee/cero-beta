import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const Fourth = () => {
  return (
    <Container>
      <IntroText>14일 후,</IntroText>
      <IntroText>당신의 화분엔</IntroText>
      <IntroText>어떤 꽃이 자라게 될까요?</IntroText>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <AutoHeightImage
          width={300}
          source={require("cero-types/assets/favicon.png")}
        ></AutoHeightImage>
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme?.color.n900};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme?.fonts.mainFont};
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default Fourth;
