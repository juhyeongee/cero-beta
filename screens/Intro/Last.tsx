import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const Last = () => {
  return (
    <Container>
      <View style={{ position: "absolute", bottom: "300px" }}>
        <AutoHeightImage
          width={300}
          source={require("cero-types/assets/favicon.png")}
        ></AutoHeightImage>
      </View>
      <IntroText>매일 조금씩 더 괜찮은 우리,</IntroText>
      <IntroText>혼자들만의 14일 이야기</IntroText>
      <View style={{ width: "100%", position: "relative", top: "30%" }}>
        {/* <BigGreenButton onPress={navigateToLogin} text="시작하기" /> */}
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

export default Last;
