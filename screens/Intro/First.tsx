import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

const First = () => {
  return (
    <Container>
      <IntroText>여기까지 오시느라 힘드셨죠?</IntroText>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme?.color.n400};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default First;
