import React, { createRef, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Header from "../components/Header";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  setMissionText: (props: string) => void;
}

const TextMission = () => {
  const [missionText, setMissionText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef<TextInput>();
  return (
    <Container>
      <SafeAreaView style={{ flex: 2 }}>
        <View style={{ flex: 1, paddingRight: "8%", paddingLeft: "8%" }}>
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            missionText={missionText}
          />
        </View>
      </SafeAreaView>
      <Main onPress={() => inputRef.current?.focus()}>
        <TextInput
          multiline={true}
          ref={inputRef}
          style={{ fontSize: 18, flexShrink: 1, lineHeight: 30 }}
          onChangeText={setMissionText}
          placeholder="여기에 적어 주세요"
        />
      </Main>
    </Container>
  );
};

export default TextMission;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  width: 100%;
`;

const Main = styled.Pressable`
  flex: 5;
  padding: 8%;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  border-top: solid;
  border-top-width: 0.2px;
  border-top-style: solid;
  border-top-color: ${(props: IContainerProps) => props.theme.color.n700};
`;
