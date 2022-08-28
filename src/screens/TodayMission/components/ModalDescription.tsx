import Theme from "@/constants/Theme";
import React from "react";
import { Modal, Pressable, ScrollView, Platform, View } from "react-native";

import {
  ModalTitle,
  ModalBox,
  ModalContainer,
  GrayBG,
  MissionContext,
} from "./Styled";

interface IModal {
  modalVisible: boolean;
  setModalVisible: (props: boolean) => void;
  missionArticleTitle: string;
  missionArticle: string;
}
const ModalDescription = ({
  missionArticleTitle,
  missionArticle,
  modalVisible,
  setModalVisible,
}: IModal) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Modal
        style={{ flex: 1 }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        />
        <ModalBox>
          <ModalContainer>
            <ModalTitle>{missionArticleTitle}</ModalTitle>
            <View
              style={{
                height: 0.5,
                width: "100%",
                backgroundColor: Theme.color.n700,
                marginTop: 30,
                marginBottom: 30,
              }}
            ></View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <MissionContext>{missionArticle}</MissionContext>
            </ScrollView>
          </ModalContainer>
        </ModalBox>
      </Modal>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <GrayBG />
      </Pressable>
    </Modal>
  );
};

export default ModalDescription;
