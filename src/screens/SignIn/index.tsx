import React, { View, Text, Pressable } from "react-native";
import { BigPrimaryBtn, OutlineBtn } from "@components/index";
import SvgIcon from "@assets/SvgIcon";
import { IntroStackScreenProps } from "@/types";
import {
  Container,
  SafeArea,
  LoginInput,
  PasswordInput,
  BottomLinePressable,
  SignInGrayBar,
} from "./components/Styled";
import currentPageStore from "@/store/CurrentPageStore";

const SignIn = ({ route, navigation }: IntroStackScreenProps<"SignIn">) => {
  const { updateScreen } = currentPageStore;
  const TOGO_SCREEN = "OnBoardingNav";

  return (
    <Container>
      <SafeArea>
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
            onPress={() => {
              updateScreen(TOGO_SCREEN);
            }}
            textBold={true}
          />
        </View>
        <SignInGrayBar />
        <View style={{ flex: 0.5, width: "100%" }}>
          <OutlineBtn
            text="이메일로 시작하기"
            onPress={() => navigation.navigate("CheckPrivacyPolicy")}
          />
          <OutlineBtn
            text="구글로 시작하기"
            onPress={() => navigation.navigate("CheckPrivacyPolicy")}
          />
          <OutlineBtn
            text="애플로 시작하기"
            onPress={() => navigation.navigate("CheckPrivacyPolicy")}
          />
          <BottomLinePressable>
            <Text>이미 아이디가 있으신가요? </Text>
            <Pressable onPress={() => navigation.navigate("LogIn")}>
              <Text style={{ textDecorationLine: "underline" }}>
                로그인하기
              </Text>
            </Pressable>
          </BottomLinePressable>
        </View>
      </SafeArea>
    </Container>
  );
};

export default SignIn;
