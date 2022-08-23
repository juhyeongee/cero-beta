import React, { useState } from "react";
import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
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
const PhotoMission = ({ pickImage }: Props) => {
  const [missionText, setMissionText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          missionText={missionText}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Main>
          <PhotoBtn onPress={pickImage}>
            <AutoHeightImage
              width={40}
              source={require("@assets/images/camera.png")}
            />
          </PhotoBtn>
        </Main>
      </SafeAreaView>
    </Container>
  );
};

export default PhotoMission;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  padding: 8%;
  flex: 1;
  width: 100%;
`;

const Main = styled.View`
  flex: 5;
  width: 100%;
`;

const PhotoBtn = styled.Pressable`
  height: 60%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  margin-bottom: 16px;
`;
