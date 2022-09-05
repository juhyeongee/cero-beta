import SvgIcon from "@/assets/SvgIcon";
import { ITheme, SettingStackScreenProps } from "@/types";
import { Platform, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Container, TitleText, SubText } from "../components/Styled";
import { useState } from "react";
import { BigPrimaryBtn } from "@/components";
import userIntoStore from "@/store/UserInfoStore";
import Theme from "@/constants/Theme";

interface StyledProps {
  theme: ITheme;
  nickname: string;
}

const ResetNicknamePage = ({
  route,
  navigation,
}: SettingStackScreenProps<"ResetNickname">) => {
  const [nickname, setNickname] = useState<string>("");

  const navigateToBack = () => {
    navigation.goBack();
  };

  const onPressChangeBtn = (newName: string) => {
    userIntoStore.updateNickname(newName);
    console.log("닉네임이 업데이트 되었습니다.");
    setTimeout(() => navigateToBack(), 500);
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Pressable onPress={navigateToBack}>
            <SvgIcon name="leftArrow" />
          </Pressable>
          <TitleText>닉네임 바꾸기</TitleText>
          <View>
            <AnswerText
              nickname={nickname}
              placeholder="6글자까지 입력하실 수 있어요"
              onChangeText={(text: string) => setNickname(text)}
            />
            <GrayBar nickname={nickname} />
          </View>
        </View>
        <View style={{ flex: 3, paddingTop: 10 }}>
          <View style={{ flex: 1 }}>
            <SubText>가입 시 설정한 닉네임을 변경합니다.</SubText>
            <SubText>닉네임은 6글자 이내로 언제든지 바꿀 수 있어요.</SubText>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              paddingBottom: 30,
            }}
          >
            <BigPrimaryBtn
              text="변경하기"
              onPress={() => onPressChangeBtn(nickname)}
            />
          </View>
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
    props.nickname.length > 6 ? props.theme.color.errorRed : "black"};
`;
const GrayBar = styled.View`
  background-color: ${(props: StyledProps) =>
    props.nickname.length > 6
      ? props.theme.color.errorRed
      : props.theme.color.n500};
  height: 2px;
  margin-top: 5px;
  width: 100%; ;
`;
export default ResetNicknamePage;
