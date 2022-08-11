import AutoHeightImage from "react-native-auto-height-image";
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  Platform,
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

interface HeaderModal {
  modalVisible: boolean;
  setModalVisible: (props: boolean) => void;
}

const Header = ({ modalVisible, setModalVisible }: HeaderModal) => {
  const navigation = useNavigation();
  const pressCompleteBtn = () => {
    //TODO: 이 함수를 pages 단계로 올리고, 완료시 데이터 업로드 로직을 추가할 것
    navigation.goBack();
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
