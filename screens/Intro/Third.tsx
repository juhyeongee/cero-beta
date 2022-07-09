import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const Third = () => {
  return (
    <Container>
      <IntroText>이곳에선 모두가</IntroText>
      <IntroText>화분에 마음을 담아,</IntroText>
      <IntroText>자신만의 씨앗을 틔웁니다.</IntroText>
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

export default Third;
