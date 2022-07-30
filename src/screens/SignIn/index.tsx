import React, { View, Text, Pressable } from "react-native";
import { Layout, BigPrimaryBtn, OutlineBtn } from "@components/index";
import styled from "styled-components/native";
import SvgIcon from "@assets/SvgIcon";
import { ITheme } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@navigations/IntroNav";

interface IContainerProps {
  theme: ITheme;
}

const SignIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Layout alignCenter={true}>
      <View
        style={{
          justifyContent: "flex-end",
          flex: 0.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        <SvgIcon name="LogoWithTitle" style={{ marginBottom: "10%" }} />
        <LoginInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="이메일"
          returnKeyType="next"
          placeholderTextColor="#B9B6B3"
        />
        <PasswordInput
          secureTextEntry
          returnKeyType="done"
          placeholderTextColor="#B9B6B3"
          placeholder="비밀번호"
        />
        <BigPrimaryBtn
          text="로그인 하기"
          onPress={() => navigation.navigate("MindTest")}
          textBold={true}
        />
      </View>
      <GrayBar />
      <View style={{ flex: 0.5, width: "100%" }}>
        <OutlineBtn
          text="이메일로 시작하기"
          onPress={() => navigation.navigate("CheckPrivacyPolicy")}
        />
        <OutlineBtn
          text="구글로 시작하기"
          onPress={() => navigation.navigate("JoinWithGoogle")}
        />
        <OutlineBtn
          text="애플로 시작하기"
          onPress={() => navigation.navigate("JoinWithApple")}
        />
        <ToLogin>
          <Text>이미 아이디가 있으신가요? </Text>
          <Pressable onPress={() => navigation.navigate("LogIn")}>
            <Text style={{ textDecorationLine: "underline" }}>로그인하기</Text>
          </Pressable>
        </ToLogin>
      </View>
    </Layout>
  );
};

const LoginInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

const GrayBar = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  margin-top: 24px;
  margin-bottom: 12px;
  width: 100%;
  height: 1px;
`;

const ToLogin = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export default SignIn;
