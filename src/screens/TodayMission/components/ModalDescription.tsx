import React from "react";
import { Modal, Pressable, ScrollView, Platform } from "react-native";

import {
  MissionTitle,
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
            <MissionTitle>{missionArticleTitle}</MissionTitle>
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
