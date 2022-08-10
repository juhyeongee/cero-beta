import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { BigPrimaryBtn } from "@components/index";
import { IntroStackScreenProps } from "@/types";
import {
  Container,
  SafeArea,
  LoginInput,
  PasswordInput,
  WhiteSpace,
} from "../components/Styled";

const EmailJoin = ({
  route,
  navigation,
}: IntroStackScreenProps<"JoinWithEmail">) => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPW, setCheckPW] = useState("");
  const navigateToPrivacyPolicy = () => {
    navigation.navigate("CheckPrivacyPolicy");
  };
  return (
    <Container>
      <SafeArea>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <LoginInput
          placeholder="가입할 이메일을 적어주세요"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          returnKeyType="next"
          onChangeText={(text) => setEmail(text)}
          //   onSubmitEditing={onSubmitEmailEditing}
          placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
        />
        <PasswordInput
          autoCapitalize="none"
          //   ref={passwordInput}
          placeholder="비밀번호를 적어주세요"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
          //   onSubmitEditing={onSubmitPasswordEditing}
        />
        <PasswordInput
          secureTextEntry
          placeholder="비밀번호를 한 번 더 적어주세요"
          onChangeText={(text) => setCheckPW(text)}
        />
        {password !== checkPW && (
          <View>
            <Text>비밀번호가 일치하지 않습니다.</Text>
          </View>
        )}
        {password !== checkPW ? (
          <BigPrimaryBtn text="계정 만들기" />
        ) : (
          <BigPrimaryBtn
            text="계정 만들기"
            // onPress={onSubmitPasswordEditing}
          />
        )}
      </SafeArea>
    </Container>
  );
};
export default EmailJoin;
