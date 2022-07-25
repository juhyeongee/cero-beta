import React, { useState } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@constants/Theme";
import AutoHeightImage from "react-native-auto-height-image/";
import Header from "../components/Header";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "constants/properties";

interface IContainerProps {
  theme: ITheme;
}
interface Props {
  pickImage: () => void;
  setMissionText: (props: string) => void;
}
const PhotoMission = ({ pickImage, setMissionText }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Container>
        <SafeAreaView style={{ flex: 1 }}>
          <Header
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
        <Main>
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="여기에 적어 주세요"
            onChangeText={setMissionText}
          />
        </Main>
      </TextBox>
    </>
  );
};

export default PhotoMission;

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

const Main = styled.View`
  flex: 5;
  padding: 8%;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  border-top: solid;
  border-top-width: 0.2px;
  border-top-style: solid;
  border-top-color: ${(props: IContainerProps) => props.theme.color.n700};
`;
