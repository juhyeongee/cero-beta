import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

const First = () => {
  return (
    <Container>
      <IntroText>여기까지 오시느라 힘드셨죠?</IntroText>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.firstPg};
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

export default First;
