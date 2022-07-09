import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const Second = () => {
  return (
    <Container>
      <IntroText>혼자가 된 사람들을 위한</IntroText>
      <IntroText>비밀의 방에 오신 것을 환영합니다.</IntroText>
      <View style={{ position: "absolute" }}>
        <AutoHeightImage
          width={300}
          source={require("cero-types/assets/favicon.png")}
        ></AutoHeightImage>
      </View>
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

export default Second;
