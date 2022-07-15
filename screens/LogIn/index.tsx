import React, { View, Text, Pressable } from "react-native";
import { Layout, BigPrimaryBtn, OutlineBtn } from "../components";
import styled from "styled-components/native";
import SvgIcon from "../../assets/SvgIcon";
import { ITheme } from "../../styled";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/IntroNav";

interface IContainerProps {
  theme?: ITheme;
}

const LogIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Layout alignCenter={true}>
      <View
        style={{
          justifyContent: "flex-end",
          flex: 0.6,
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
      <ToLogin>
        <Text>이미 아이디가 있으신가요? </Text>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ textDecorationLine: "underline" }}>회원가입</Text>
        </Pressable>
      </ToLogin>
    </Layout>
  );
};

const LoginInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme?.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme?.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

const ToLogin = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export default LogIn;
