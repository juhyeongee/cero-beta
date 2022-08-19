import AutoHeightImage from "react-native-auto-height-image";
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  Platform,
  Alert,
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
} from "./Styled";
import dayjs from "dayjs";

interface HeaderModal {
  modalVisible: boolean;
  setModalVisible: (props: boolean) => void;
}

const Header = ({ modalVisible, setModalVisible }: HeaderModal) => {
  const { updateCompleteMissionDatesArray, addOne } = userInfoStore;
  const navigation = useNavigation();
  const pressCompleteBtn = () => {
    Alert.alert(
      "미션 내용을 제출하시겠어요?",
      `완료한 내용은 '지난 할 일' 탭\n에서 완료할 수 있어요`,
      [
        {
          text: "네",
          onPress: async () => {
            updateCompleteMissionDatesArray(dayjs().format("YYMMDD"));
            addOne();
            navigation.goBack();
          },
        },
        { text: "아니요", onPress: () => console.log("취소~") },
      ]
    );
  };
  const { todoNum, versionNum } = userInfoStore;
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
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <SvgIcon name="information" />
            </Pressable>
          </View>
          <Subtitle>{missionDescription}</Subtitle>
        </View>
      </Container>
    </>
  );
};
export default Header;
