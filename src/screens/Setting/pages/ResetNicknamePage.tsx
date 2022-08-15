import SvgIcon from "@/assets/SvgIcon";
import { ITheme } from "@/types";
import { Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Container, TitleText, SubText } from "../components/Styled";
import { useState } from "react";
import GreenTimePicker from "../components/settingHomeComp/NoticeBar";

interface StyledProps {
  theme: ITheme;
  nickname: string;
}

const ResetNicknamePage = () => {
  const [nickname, setNickname] = useState<string>("");

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <SvgIcon name="leftArrow" />
          <TitleText>닉네임 바꾸기</TitleText>
          <AnswerText
            nickname={nickname}
            placeholder="6글자까지 입력하실 수 있어요"
            onChangeText={(text: string) => setNickname(text)}
          />
          <GrayBar nickname={nickname} />
        </View>
        <View style={{ flex: 4 }}>
          <SubText>
            가입 시 설정한 닉네임을 변경합니다.닉네임은 6글자 이내로 언제든지
            변경 가능합니다.
          </SubText>
        </View>
      </SafeAreaView>
    </Container>
  );
};

const AnswerText = styled.TextInput`
  font-size: 20px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  color: ${(props: StyledProps) =>
    props.nickname.length > 6 ? "#E26D66" : "black"};
`;
const GrayBar = styled.View`
  background-color: ${(props: StyledProps) =>
    props.nickname.length > 6 ? "#E26D66" : props.theme.color.n500};
  height: 1px;
  width: 100%;
`;
export default ResetNicknamePage;
