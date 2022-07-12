import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const Fifth = () => {
  return (
    <Container>
      <IntroText>어서오세요.</IntroText>
      <IntroText>지금은 새로 시작할 시간입니다</IntroText>
      <View style={{ position: "absolute" }}>
        <AutoHeightImage
          width={300}
          source={require("cero-types/assets/splash.png")}
        ></AutoHeightImage>
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme?.color.n200};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default Fifth;
