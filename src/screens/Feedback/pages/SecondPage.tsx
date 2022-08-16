import { View, Text, Pressable, Platform } from "react-native";
import { EndingResultText } from "@constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { BigPrimaryBtn, MultiChoiceBtn } from "@/components";
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
  goFeedbackPage: () => void;
}
const SecondPage = ({ goFeedbackPage }: IFirstPageProps) => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TitleText>감사드려요 😄</TitleText>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainText>어떤 점이 마음에 드셨는지</MainText>
        <MainText>새로를 칭찬해주세요!</MainText>
      </View>
      <View
        style={{
          flex: 2.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        <BigPrimaryBtn text="리뷰 남기기" textBold={true} />

        <GrayBtn onPress={goFeedbackPage}>
          <BtnInnerText>다음에 할게요</BtnInnerText>
        </GrayBtn>
      </View>
    </Container>
  );
};

export default SecondPage;
