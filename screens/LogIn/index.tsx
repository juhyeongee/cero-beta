import React, { View, Text } from "react-native";
import { Layout, BigPrimaryBtn, OutlineBtn } from "../components";
import styled from "styled-components/native";
import SvgIcon from "../../assets/SvgIcon";
import { ITheme } from "../../styled";
import { useNavigation } from "@react-navigation/native";

interface IContainerProps {
  theme?: ITheme;
}

const LogIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Layout alignCenter={true}>
      <View style={{ justifyContent: "flex-end", flex: 0.5, width: "100%" }}>
        <SvgIcon name="LogoWithTitle" />
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
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={{ justifyContent: "flex-end", flex: 0.5, width: "100%" }}>
        <OutlineBtn text="이메일로 시작하기" />
        <OutlineBtn text="구글로 시작하기" />
        <OutlineBtn text="애플로 시작하기" />
      </View>
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
  margin-top: 10px; ;
`;

const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme?.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 10px; ;
`;

export default LogIn;
