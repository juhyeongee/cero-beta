import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@assets/SvgIcon";
import { BigPrimaryBtn } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@navigations/IntroNav";

interface IContainerProps {
  theme: ITheme;
}

const MakeSeedModal = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Container>
      <SvgIcon name="seedPacket" />
      <View style={{ alignItems: "center" }}>
        <BoldText>마음 씨앗 만들기</BoldText>
        <GrayText>20개 질문, 평균 5분 소요</GrayText>
      </View>
      <GrayBox>
        <SubText>지난 일주일을 가만히 돌아보세요.</SubText>
        <SubText>온전히 집중할 수 있는 편안한 환경에서 대답해주세요.</SubText>
      </GrayBox>
      <BigPrimaryBtn
        onPress={() => navigation.navigate("Home")}
        text="시작하기"
      />
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 300px;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;

const BoldText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
  margin-bottom: 4px;
`;

const GrayText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const GrayBox = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
  width: 100%;
  height: 68px;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
`;

const SubText = styled.Text`
  font-size: 13px;
  color: ${(props: IContainerProps) => props.theme.color.n800};
`;

export default MakeSeedModal;
