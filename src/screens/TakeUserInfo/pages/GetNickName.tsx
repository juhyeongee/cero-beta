import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { BigPrimaryBtn } from "@components/index";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Container, SafeArea, TitleText } from "../components/Styled";

import { observer } from "mobx-react";
import userInfoStore from "@/store/UserInfoStore";

interface IContainerProps {
  theme: ITheme;
  nickname: string;
}

interface IPageProps {
  swipeNextPage: () => void;
}

const GetNickName = ({ swipeNextPage }: IPageProps) => {
  const [nickname, setNickname] = useState<string>("");
  const updateNicknameFunction = () => {
    userInfoStore.updateNickname(nickname);
  };
  return (
    <Container>
      <SafeArea>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1 }}>
            <TitleText>앞으로 어떻게 불러드릴까요?</TitleText>
            <AnswerText
              nickname={nickname}
              placeholder="6글자까지 입력하실 수 있어요"
              onChangeText={(text: string) => setNickname(text)}
            ></AnswerText>
            <GrayBar nickname={nickname} />
            {nickname.length > 6 && (
              <Text style={{ fontSize: 12, color: "#E26D66" }}>
                닉네임은 6자까지만 입력이 가능해요.
              </Text>
            )}
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: "flex-end",
              width: "100%",
              paddingBottom: 40,
            }}
          >
            <BigPrimaryBtn
              text="다음"
              onPress={() => {
                updateNicknameFunction();
                swipeNextPage();
              }}
              textBold={false}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeArea>
    </Container>
  );
};

export default GetNickName;

export const GrayBar = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.nickname.length > 6 ? "#E26D66" : props.theme.color.n500};
  width: 100%;
  height: 1px;
  margin-bottom: 6px;
`;
export const AnswerText = styled.TextInput`
  font-size: 20px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  color: ${(props: IContainerProps) =>
    props.nickname.length > 6 ? "#E26D66" : "black"};
`;
