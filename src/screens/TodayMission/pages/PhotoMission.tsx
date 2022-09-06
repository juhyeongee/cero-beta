import React, { useState } from "react";
import { Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

import Header from "../components/Header";

interface IContainerProps {
  theme: ITheme;
}
interface Props {
  pickImage: () => void;
  imageUri: string | null | undefined;
}
const PhotoMission = ({ pickImage, imageUri }: Props) => {
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
          {typeof imageUri === "string" ? (
            <Image
              style={{
                marginBottom: 24,
                width: "100%",
                height: 300,
                borderRadius: 20,
              }}
              resizeMode="contain"
              source={{
                uri: imageUri,
              }}
            />
          ) : (
            <PhotoBtn onPress={pickImage}>
              <Image
                width={100}
                height={300}
                source={require("@assets/images/camera.png")}
              />
            </PhotoBtn>
          )}
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
