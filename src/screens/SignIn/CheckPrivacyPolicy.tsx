import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import CheckBox from "expo-checkbox";
import SvgIcon from "@assets/SvgIcon";
import { Layout } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IntroStackParamList } from "@/types";
import { ITheme } from "@/types";
import { BigPrimaryBtn } from "@components/index";

interface IContainerProps {
  theme: ITheme;
}

const CheckPrivacyPolicy = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<IntroStackParamList>>();

  return (
    <Layout>
      <Container>
        <CheckContainer>
          <Pressable
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <AgreeText>약관 전체 동의</AgreeText>
          </Pressable>
          <Pressable
            style={{
              width: "20%",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.5%",
            }}
          >
            <SvgIcon name="rightArrow" />
          </Pressable>
        </CheckContainer>
        <GrayBar />
        <CheckContainer>
          <Pressable
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <AgreeText>(필수) 이메일 정보 제공 동의</AgreeText>
          </Pressable>
          <Pressable
            style={{
              width: "20%",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.5%",
            }}
          >
            <SvgIcon name="rightArrow" />
          </Pressable>
        </CheckContainer>
        <CheckContainer>
          <Pressable
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <AgreeText>(선택) 말걸기 알림 받기 동의</AgreeText>
          </Pressable>
          <Pressable
            style={{
              width: "20%",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.5%",
            }}
            onPress={() => navigation.navigate("PolicyDetail")}
          >
            <SvgIcon name="rightArrow" />
          </Pressable>
        </CheckContainer>
        <CheckContainer>
          <Pressable
            style={{
              flexDirection: "row",
              width: "80%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            onPress={() => setToggleCheckBox(!toggleCheckBox)}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <AgreeText>(선택) 이벤트 및 광고 수신동의</AgreeText>
          </Pressable>
        </CheckContainer>
        <BigPrimaryBtn
          text="시작하기"
          onPress={() => navigation.navigate("JoinWithEmail")}
        />
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10%;
`;

const AgreeText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-size: 16px;
  margin-left: 8%;
  position: relative;
  top: -1.5%;
`;

const GrayBar = styled.View`
  position: relative;
  top: -0.5%;
  margin-bottom: 6%;
  background-color: ${(props: IContainerProps) => props.theme.color.n600};
  width: 100%;
  height: 1px;
`;

const CheckContainer = styled.View`
  height: 46px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export default CheckPrivacyPolicy;
