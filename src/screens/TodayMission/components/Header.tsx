import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image";
import { View, Text, Pressable } from "react-native";
import SvgIcon from "@/assets/SvgIcon";
import { ITheme } from "@/../styled";
interface IContainerProps {
  theme: ITheme;
}

const Header = () => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AutoHeightImage
          width={24}
          source={require("@assets/images/leftArrow.png")}
        />
        <HeaderText>오늘의 할 일</HeaderText>
        <Pressable>
          <FinishBtn>완료</FinishBtn>
        </Pressable>
      </View>
      <View style={{ flex: 1, marginBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MissionTitle>하늘 사진 찍기</MissionTitle>
          <SvgIcon name="information" />
        </View>
        <Subtitle>김효준 님, 오늘 하늘은 어떤 색인가요?</Subtitle>
        <Subtitle>잠시 고개를 들고 사진 한 장 찍어보세요!</Subtitle>
      </View>
    </Container>
  );
};
export default Header;

const Container = styled.View`
  flex: 2;
  width: 100%;
`;

const HeaderText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-size: 18px;
`;

const MissionTitle = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 18px;
  margin-bottom: 10px;
  margin-right: 8px; ;
`;

const Subtitle = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-family: ${(props: IContainerProps) => props.theme.font.thinFont};
`;

const FinishBtn = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.primary};
  font-size: 16px;
`;
