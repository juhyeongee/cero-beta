import React, { createRef, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
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
  const scrollViewRef = useRef<any>();
  const [missionText, setMissionText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef<TextInput>();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const keyboardDidShowListener = Keyboard.addListener(
    "keyboardDidShow",
    () => {
      setKeyboardVisible(true);
    }
  );
  const keyboardDidHideListener = Keyboard.addListener(
    "keyboardDidHide",
    () => {
      setKeyboardVisible(false);
    }
  );
  useEffect(() => {
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 3 }}
          >
            <TouchableWithoutFeedback
              onPress={() => keyboardDidHideListener.remove()}
            >
              <Main onPress={() => inputRef.current?.focus()}>
                <ScrollView
                  style={{ flex: 1 }}
                  ref={scrollViewRef}
                  onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                  }
                >
                  <TextInput
                    multiline={true}
                    ref={inputRef}
                    style={{ fontSize: 18, flexShrink: 1 }}
                    placeholder="여기에 적어 주세요"
                    onChangeText={setMissionText}
                    autoCorrect={false}
                  />
                </ScrollView>
              </Main>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Container>
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
  flex: 2.5;
  width: 100%;
`;

const PhotoBtn = styled.Pressable`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  margin-bottom: 16px;
`;

const Main = styled.Pressable`
  margin-top: 4%;
  flex: 5;
  padding: 8% 0% 18% 0%;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  border-top: solid;
  border-top-width: 0.2px;
  border-top-style: solid;
  border-top-color: ${(props: IContainerProps) => props.theme.color.n700};
`;
