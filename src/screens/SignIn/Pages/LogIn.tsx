import React, { View, Text, Pressable } from "react-native";
import { BigPrimaryBtn } from "@components/index";
import SvgIcon from "@assets/SvgIcon";

import {
  Container,
  SafeArea,
  LoginInput,
  PasswordInput,
  BottomLinePressable,
} from "../components/Styled";
import { IntroStackScreenProps } from "@/types";

const LogIn = ({ route, navigation }: IntroStackScreenProps<"LogIn">) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Container>
      <SafeArea>
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
            textBold={true}
            onPress={navigateToSignIn}
          />
        </View>
        <BottomLinePressable>
          <Text>아이디가 없으신가요? </Text>
          <Pressable onPress={navigateToSignIn}>
            <Text style={{ textDecorationLine: "underline" }}>회원가입</Text>
          </Pressable>
        </BottomLinePressable>
      </SafeArea>
    </Container>
  );
};

export default LogIn;
