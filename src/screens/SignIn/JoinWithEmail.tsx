import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";
import { BigPrimaryBtn, Layout } from "@components/index";
import { ITheme } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IntroStackParamList } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

const JoinWithEmail = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPW, setCheckPW] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<IntroStackParamList>>();
  return (
    <Layout>
      <ButtonContainer>
        <EmailInput
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          returnKeyType="next"
          onChangeText={(text) => setEmail(text)}
          //   onSubmitEditing={onSubmitEmailEditing}
          placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
        />
        <PWInput
          autoCapitalize="none"
          //   ref={passwordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
          //   onSubmitEditing={onSubmitPasswordEditing}
        />
        <PWInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setCheckPW(text)}
        />
        {password !== checkPW && (
          <View>
            <Text>비밀번호가 일치하지 않습니다.</Text>
          </View>
        )}
        {password !== checkPW ? (
          <BigPrimaryBtn text="Create Account" />
        ) : (
          <BigPrimaryBtn
            text="Create Account"
            // onPress={onSubmitPasswordEditing}
            onPress={() => navigation.navigate("MindTest")}
          />
        )}
      </ButtonContainer>
      <ContentContainer></ContentContainer>
    </Layout>
  );
};

const EmailInput = styled.TextInput`
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
  padding: 10px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const PWInput = styled.TextInput`
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
  padding: 10px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const ContentContainer = styled.View`
  justify-content: center;
  flex: 1;
`;
const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex: 1;
`;

export default JoinWithEmail;
