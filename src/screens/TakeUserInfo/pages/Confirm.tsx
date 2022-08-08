import { View, Text, Platform } from "react-native";
import styled from "styled-components/native";
import { MainText, BigPrimaryBtn } from "@components/index";
import { ITheme } from "@/types";
import { Container, SafeArea } from "../components/Styled";

interface IContainerProps {
  theme: ITheme;
}

const Confirm = () => {
  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <MainText>아래 내용이 맞나요?</MainText>
        </View>
        <View style={{ flex: 7, width: "100%" }}>
          <MainContainer>
            <View style={{ flex: 1 }}>
              <TagName>이름</TagName>
              <InfoContainer>
                <InfoText>김효준</InfoText>
              </InfoContainer>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TagName>나이</TagName>
                <InfoContainer>
                  <InfoText>만 27세</InfoText>
                </InfoContainer>
              </View>
              <View style={{ flex: 0.1 }}></View>
              <View style={{ flex: 1 }}>
                <TagName>성별</TagName>
                <InfoContainer>
                  <InfoText>남성</InfoText>
                </InfoContainer>
              </View>
            </View>
          </MainContainer>
        </View>
        <BigPrimaryBtn text="다음" textBold={true} />
      </SafeArea>
    </Container>
  );
};

export default Confirm;

const MainContainer = styled.View`
  flex: 0.35;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  box-shadow: 1px 1px 10px #cbcbcb75;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 24px;
`;

const TagName = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-size: 12px;
  margin-bottom: 8px;
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
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 16px;
`;
