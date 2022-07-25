import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@constants/Theme";
import AutoHeightImage from "react-native-auto-height-image/";
import Header from "../components/Header";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  setMissionText: (props: string) => void;
}

const TextMission = ({ setMissionText }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <SafeAreaView style={{ flex: 2 }}>
        <View style={{ flex: 1, paddingRight: "8%", paddingLeft: "8%" }}>
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </SafeAreaView>
      <Main>
        <TextInput
          style={{ fontSize: 18 }}
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
