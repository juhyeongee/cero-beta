import React, { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import todoNumStore from "@/store/TodoNumStore";
import { observer } from "mobx-react";

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
      <Text>{todoNumStore.todoNum}</Text>
      <Pressable onPress={addOne}>
        <View>
          <Text>missionNum 하나 추가요~</Text>
        </View>
      </Pressable>
      <Pressable onPress={minusOne}>
        <View>
          <Text>missionNum 뺄게요 하나~</Text>
        </View>
      </Pressable>
      <Text>{todoNumStore.versionNum}</Text>

      <Pressable onPress={resetVersion}>
        <View>
          <Text>versionNum 리셋하기요~</Text>
        </View>
      </Pressable>
      <Text>{todoNumStore.nickname}</Text>
    </CenterView>
  );
};

export default observer(Setting);

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; ;
`;
