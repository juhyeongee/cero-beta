import { View, Text, Pressable, Platform } from "react-native";
import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image";
import { ITheme } from "@/types";
import {
  TitleText,
  GrayBtn,
  MainText,
  BtnInnerText,
  Container,
} from "../components/Styled";

interface IContainerProps {
  theme: ITheme;
}
interface IFirstPageProps {
  goGoodPage: () => void;
  goBadPage: () => void;
}
const FirstPage = ({ goGoodPage, goBadPage }: IFirstPageProps) => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <SvgIcon name="LogoWithTitle" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainText>새로와 함께한 시간이 </MainText>
        <MainText>마음에 드셨나요?</MainText>
      </View>
      <View
        style={{
          flex: 1.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        <GrayBtn onPress={goGoodPage}>
          <AutoHeightImage
            width={20}
            source={require("@/assets/images/happyFeeling.png")}
          />
          <BtnInnerText>좋았어요!</BtnInnerText>
        </GrayBtn>
        <GrayBtn onPress={goBadPage}>
          <AutoHeightImage
            width={20}
            source={require("@/assets/images/badFeeling.png")}
          />
          <BtnInnerText>그저 그랬어요</BtnInnerText>
        </GrayBtn>
      </View>
    </Container>
  );
};

export default FirstPage;
