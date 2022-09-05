import AutoHeightImage from "react-native-auto-height-image";
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  Platform,
  Alert,
  Keyboard,
} from "react-native";
import SvgIcon from "@/assets/SvgIcon";
import { useNavigation } from "@react-navigation/native";
import userInfoStore from "@/store/UserInfoStore";
import missions from "@constants/missions";
import ModalDescription from "./ModalDescription";
import {
  Container,
  HeaderText,
  MissionTitle,
  Subtitle,
  FinishBtn,
  GreenText,
} from "./Styled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react";
import { scheduleAfterMissionNotiHandler } from "@/utils/notification";

interface HeaderModal {
  modalVisible: boolean;
  setModalVisible: (props: boolean) => void;
  missionText: string;
}

const Header = ({
  modalVisible,
  setModalVisible,
  missionText,
}: HeaderModal) => {
  const { minusOne, todoNum, versionNum } = userInfoStore;
  const navigation = useNavigation();
  const pressCompleteBtn = () => {
    const { todayDate } = userInfoStore;
    Alert.alert(
      "미션 내용을 제출하시겠어요?",
      `제출한 내용은 '지난 할 일' 탭에서 \n확인할 수 있어요`,
      [
        {
          text: "네",
          onPress: async () => {
            await AsyncStorage.setItem(
              `mission${todoNum}Result`,
              JSON.stringify({
                missionName: missionTitle,
                completeDate: todayDate,
                todoNum: todoNum,
                versionNum: versionNum,
                resultText: missionText,
              }),
              () => {
                userInfoStore.updateCompleteMissionDatesArray(todayDate);
                userInfoStore.addOne();
                scheduleAfterMissionNotiHandler();
                navigation.goBack();
              }
            );
          },
        },
        {
          text: "아니요",
          onPress: () => {
            Keyboard.dismiss();
          },
        },
      ]
    );
  };
  const version = `version${versionNum}`;
  const missionTitle = missions[todoNum][version].subtitle;
  const missionDescription = missions[todoNum][version].description;
  const missionArticleTitle = missions[todoNum][version].articleTitle;
  const missionArticle = missions[todoNum][version].article;

  return (
    <>
      <Container>
        <ModalDescription
          missionArticle={missionArticle}
          missionArticleTitle={missionArticleTitle}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <AutoHeightImage
              width={24}
              source={require("@assets/images/leftArrow.png")}
            />
          </Pressable>
          <HeaderText>오늘의 할 일</HeaderText>
          <Pressable onPress={pressCompleteBtn}>
            <FinishBtn>완료</FinishBtn>
          </Pressable>
        </View>
        <View style={{ flex: 1, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MissionTitle>{missionTitle}</MissionTitle>
          </View>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Subtitle>{missionDescription}</Subtitle>
            <GreenText>...더보기</GreenText>
          </Pressable>
        </View>
      </Container>
    </>
  );
};
export default observer(Header);
