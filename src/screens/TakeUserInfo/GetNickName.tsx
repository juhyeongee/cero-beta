import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Layout, MainText, BigPrimaryBtn } from "@components/index";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
  nickname: string;
}

const GetNickName = () => {
  const [nickname, setNickname] = useState<string>("");

  return (
    <Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
      >
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1 }}>
          <MainText>앞으로 어떻게 불러드릴까요?</MainText>
          <AnswerText
            nickname={nickname}
            placeholder="6글자까지 입력하실 수 있어요"
            onChangeText={(text: string) => setNickname(text)}
          ></AnswerText>
          <Bar nickname={nickname} />
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
              console.log("닉네임 저장완료:", nickname);
            }}
            textBold={false}
          />
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default GetNickName;

const Bar = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.nickname.length > 6 ? "#E26D66" : props.theme.color.n500};
  width: 100%;
  height: 1px;
  margin-bottom: 6px;
`;
const AnswerText = styled.TextInput`
  font-size: 20px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) =>
    props.nickname.length > 6 ? "#E26D66" : "black"};
`;
