import SvgIcon from "@/assets/SvgIcon";
import { ITheme, SettingStackScreenProps } from "@/types";
import { Platform, View, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Container, TitleText, SubText } from "../components/Styled";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IContainerProps {
  theme: ITheme;
}

const ResetDataPage = ({
  route,
  navigation,
}: SettingStackScreenProps<"ResetData">) => {
  const navigateToBack = () => {
    navigation.goBack();
  };

  const resetData = () => {
    AsyncStorage.clear();
  };

  const onClickResetBtn = () => {
    Alert.alert("정말 초기화하시겠어요?", "", [
      {
        text: "네",
        onPress: () => {
          resetData();
          Alert.alert("앱이 초기화되었습니다.", "앱을 껐다 켜주세요 :)");
        },
        style: "destructive",
      },
      { text: "아니요", onPress: () => {} },
    ]);
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Pressable onPress={navigateToBack}>
            <SvgIcon name="leftArrow" />
          </Pressable>
          <TitleText>데이터 초기화하기</TitleText>
        </View>
        <View style={{ flex: 4 }}>
          <View style={{ flex: 1 }}>
            <SubText>
              초기화 시 기본 정보(이름 및 생년월일), 마음 검사 결과 등 모든
              데이터가 삭제됩니다.
            </SubText>
            <SubText />
            <SubText>
              한 번 지워진 데이터는 복구가 불가능하니 신중하게 고민해주세요.
            </SubText>
          </View>
          <View
            style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}
          >
            <ButtonBG onPress={onClickResetBtn}>
              <ButtonInnerText>데이터 초기화</ButtonInnerText>
            </ButtonBG>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default ResetDataPage;

const ButtonInnerText = styled.Text`
  font-size: 16px;
  color: ${(props: IContainerProps) => props.theme.color.n0};
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
`;
const ButtonBG = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.errorRed};
  border-radius: 10px;
  height: 48px;
  padding: ${Platform.OS === "ios" ? "10px" : "0px"} 20px;
`;
