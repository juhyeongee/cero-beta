import React, { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import todoNumStore from "@/store/TodoNumStore";
import { observer } from "mobx-react";
import { MainText } from "@/components";
import currentPageStore from "@/store/CurrentPageStore";

const Setting = () => {
  function addOne() {
    todoNumStore.addOne();
    todoNumStore.resetVersionNum();
  }
  function minusOne() {
    todoNumStore.minusOne();
    todoNumStore.resetVersionNum();
  }
  function resetVersion() {
    todoNumStore.resetVersionNum();
  }
  return (
    <CenterView>
      <MainText> Store 상황입니다.</MainText>
      <Text>현재 TodoNum: {todoNumStore.todoNum}</Text>
      <Pressable onPress={addOne}>
        <Text>missionNum 하나 추가하기</Text>
      </Pressable>
      <Pressable onPress={minusOne}>
        <Text>missionNum 하나 빼기</Text>
      </Pressable>
      <View>
        <Text>-----------------</Text>
      </View>
      <Text>현재 VersionNum: {todoNumStore.versionNum}</Text>
      <Pressable onPress={resetVersion}>
        <Text>versionNum 1로 초기화하기</Text>
      </Pressable>
      <View>
        <Text>-----------------</Text>
      </View>
      <Text>현재 유저이름: {todoNumStore.nickname}</Text>
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

export default observer(Setting);

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; ;
`;
