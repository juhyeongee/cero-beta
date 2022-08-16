import React, { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";
import currentPageStore from "@/store/CurrentPageStore";

const Devtool = () => {
  function addOne() {
    userInfoStore.addOne();
    userInfoStore.resetVersionNum();
  }
  function minusOne() {
    userInfoStore.minusOne();
    userInfoStore.resetVersionNum();
  }
  function resetVersion() {
    userInfoStore.resetVersionNum();
  }
  return (
    <CenterView>
      <Text> Store 상황입니다.</Text>
      <Text>현재 TodoNum: {userInfoStore.todoNum}</Text>
      <Pressable onPress={addOne}>
        <Text>missionNum 하나 추가하기</Text>
      </Pressable>
      <Pressable onPress={minusOne}>
        <Text>missionNum 하나 빼기</Text>
      </Pressable>
      <View>
        <Text>-----------------</Text>
      </View>
      <Text>현재 VersionNum: {userInfoStore.versionNum}</Text>
      <Pressable onPress={resetVersion}>
        <Text>versionNum 1로 초기화하기</Text>
      </Pressable>
      <View>
        <Text>-----------------</Text>
      </View>
      <Text>현재 유저이름: {userInfoStore.nickname}</Text>
      <Text>현재 페이지 이름: {currentPageStore.currentScreen}</Text>
      <Pressable onPress={() => currentPageStore.updateScreen("IntroNav")}>
        <Text>Intro화면으로 가기 </Text>
      </Pressable>
      <Pressable onPress={() => currentPageStore.updateScreen("OnBoardingNav")}>
        <Text>Onboarding 화면으로 가기 </Text>
      </Pressable>
    </CenterView>
  );
};

export default observer(Devtool);

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; ;
`;
