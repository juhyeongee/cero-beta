import React, { createRef, useState } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import AutoHeightImage from "react-native-auto-height-image/";
import Header from "../components/Header";

interface IContainerProps {
  theme: ITheme;
}
interface Props {
  pickImage: () => void;
}
const PhotoTextMission = ({ pickImage }: Props) => {
  const [missionText, setMissionText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef<TextInput>();

  return (
    <>
      <Container>
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            missionText={missionText}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <PhotoTab>
            <PhotoBtn onPress={pickImage}>
              <AutoHeightImage
                width={40}
                source={require("@assets/images/camera.png")}
              />
            </PhotoBtn>
          </PhotoTab>
        </SafeAreaView>
      </Container>
      <TextBox>
        <Main onPress={() => inputRef.current?.focus()}>
          <TextInput
            multiline={true}
            ref={inputRef}
            style={{ fontSize: 18, flexShrink: 1, lineHeight: 10 }}
            placeholder="여기에 적어 주세요"
            onChangeText={setMissionText}
          />
        </Main>
      </TextBox>
    </>
  );
};

export default PhotoTextMission;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  padding: 8%;
  flex: 1;
  width: 100%;
`;

const PhotoTab = styled.View`
  flex: 5;
  width: 100%;
`;

const TextBox = styled.View`
  position: absolute;
  width: 100%;
  height: 36%;
  bottom: 0%;
`;

const PhotoBtn = styled.Pressable`
  height: 40%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  margin-bottom: 16px;
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
