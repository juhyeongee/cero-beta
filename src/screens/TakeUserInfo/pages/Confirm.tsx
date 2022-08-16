import { View, Text, Platform } from "react-native";
import styled from "styled-components/native";
import { BigPrimaryBtn } from "@components/index";
import { ITheme } from "@/types";
import { Container, SafeArea, TitleText } from "../components/Styled";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";

interface IContainerProps {
  theme: ITheme;
}

interface IConfirm {
  navigateToMindText: () => void;
}

const Confirm = ({ navigateToMindText }: IConfirm) => {
  const { nickname, age, gender } = userInfoStore;
  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <TitleText>아래 내용이 맞나요?</TitleText>
        </View>
        <View style={{ flex: 7, width: "100%" }}>
          <MainContainer>
            <View style={{ flex: 1 }}>
              <TagName>이름</TagName>
              <InfoContainer>
                <InfoText>{nickname}</InfoText>
              </InfoContainer>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TagName>나이</TagName>
                <InfoContainer>
                  <InfoText>{age}</InfoText>
                </InfoContainer>
              </View>
              <View style={{ flex: 0.1 }}></View>
              <View style={{ flex: 1 }}>
                <TagName>성별</TagName>
                <InfoContainer>
                  <InfoText>{gender}</InfoText>
                </InfoContainer>
              </View>
            </View>
          </MainContainer>
        </View>
        <BigPrimaryBtn
          text="다음"
          textBold={false}
          onPress={navigateToMindText}
        />
      </SafeArea>
    </Container>
  );
};

export default observer(Confirm);

const MainContainer = styled.View`
  flex: ${Platform.OS === "ios" ? "0.35" : "0.4"};
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  box-shadow: 1px 1px 10px #cbcbcb;
  border-radius: 10px;
  box-sizing: border-box;
  padding: ${Platform.OS === "ios" ? "8%" : "6%"};
`;

const TagName = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-size: 12px;
  margin-bottom: 8px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;

const InfoContainer = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  height: 39px;
`;

const InfoText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  font-size: 16px;
`;
