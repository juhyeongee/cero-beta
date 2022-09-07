import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Layout } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import userInfoStore from "@/store/UserInfoStore";

interface IContainerProps {
  theme: ITheme;
}
interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  missionTitle: string;
  thisMissionNum: number;
  resultTextFromAsyncStorage: string | undefined;
  missionNameFromAsyncStorage: string | undefined;
  completeDateFromAsyncStorage: string | undefined;
  imageUri?: string | null;
}
const DetailModal = ({
  modalVisible,
  setModalVisible,
  missionNameFromAsyncStorage,
  completeDateFromAsyncStorage,
  resultTextFromAsyncStorage,
  imageUri,
}: Props) => {
  const year = completeDateFromAsyncStorage?.slice(0, 2);
  const month = completeDateFromAsyncStorage?.slice(2, 4);
  const day = completeDateFromAsyncStorage?.slice(4, 6);

  return (
    <Modal
      style={{ flex: 1 }}
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Layout>
        <Header>
          <View style={{ width: "90%" }}>
            <MainText numberOfLines={1} ellipsizeMode="tail">
              {missionNameFromAsyncStorage}
            </MainText>
            <DateText>
              {year}년 {month}월 {day}일
            </DateText>
          </View>
          <Pressable onPress={() => setModalVisible(false)}>
            <SvgIcon name="exitX" />
          </Pressable>
        </Header>
        <Body>
          <ScrollView showsVerticalScrollIndicator={false}>
            {imageUri && (
              <Image
                style={{
                  marginBottom: 24,
                  width: "100%",
                  height: 400,
                  borderRadius: 20,
                }}
                resizeMode="contain"
                source={{
                  uri: imageUri,
                }}
              />
            )}
            <Words>{resultTextFromAsyncStorage}</Words>
          </ScrollView>
        </Body>
      </Layout>
    </Modal>
  );
};

export default DetailModal;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.View`
  flex: 6;
  width: 100%;
`;

const MainText = styled.Text`
  width: 95%;
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: 18px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const DateText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const Words = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 14px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
  line-height: 24px;
`;
