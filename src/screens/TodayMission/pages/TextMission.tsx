import React, { createRef, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Header from "../components/Header";

interface IContainerProps {
  theme: ITheme;
}

const TextMission = () => {
  const scrollViewRef = useRef<any>();

  const [missionText, setMissionText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef<TextInput>();

  const keyboardDidShowListener = Keyboard.addListener(
    "keyboardDidShow",
    () => {}
  );

  const keyboardDidHideListener = Keyboard.addListener(
    "keyboardDidHide",
    () => {}
  );

  useEffect(() => {
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
      <KeyboardAvoidingView
        style={{ flex: 5 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Main onPress={() => inputRef.current?.focus()}>
            <View style={{ flex: 1 }}>
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
                  style={{ fontSize: 18, flexShrink: 1, lineHeight: 30 }}
                  onChangeText={setMissionText}
                  placeholder="여기에 적어 주세요"
                  autoCorrect={false}
                />
              </ScrollView>
            </View>
          </Main>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
