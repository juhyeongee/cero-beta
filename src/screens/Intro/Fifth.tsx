import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import SvgIcon from "@assets/SvgIcon";

interface IContainerProps {
  theme: ITheme;
}

const Fifth = () => {
  return (
    <Container>
      <IntroText>어서오세요.</IntroText>
      <IntroText>지금은 새로 시작할 시간입니다</IntroText>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="FifthWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="FifthPot" />
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.fifthPg};
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

export default Fifth;
