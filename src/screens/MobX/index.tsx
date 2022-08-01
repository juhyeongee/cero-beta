import React, { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import missionNumStore from "@/store/MissionNumStore";
import { observer } from "mobx-react";

const MobXScreen = () => {
  function addOne() {
    missionNumStore.addOne();
  }
  function minusOne() {
    missionNumStore.minusOne();
  }
  return (
    <CenterView>
      <Text>{missionNumStore.missionNum}</Text>
      <Pressable onPress={addOne}>
        <View>
          <Text>하나 추가요~</Text>
        </View>
      </Pressable>
      <Pressable onPress={minusOne}>
        <View>
          <Text>뺄게요 하나~</Text>
        </View>
      </Pressable>
    </CenterView>
  );
};

export default observer(MobXScreen);

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; ;
`;
