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
  function plusVersion() {
    todoNumStore.plusVersionNum();
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

      <Pressable onPress={plusVersion}>
        <View>
          <Text>versionNum 하나 추가요</Text>
        </View>
      </Pressable>
      <Pressable onPress={resetVersion}>
        <View>
          <Text>versionNum 뺄게요 하나~</Text>
        </View>
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
