import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image";
import { View, Text, Pressable, Modal, ScrollView } from "react-native";
import SvgIcon from "@/assets/SvgIcon";
import { ITheme } from "@/types";
import { useNavigation } from "@react-navigation/native";
import todoNumStore from "@/store/TodoNumStore";
import missions from "@constants/missions";

interface IContainerProps {
  theme: ITheme;
}
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
  const { todoNum, versionNum } = todoNumStore;
  const version = `version${versionNum}`;
  const missionType = missions[todoNum].version1.type;
  const missionTitle = missions[todoNum][version].subtitle;
  const missionDescription = missions[todoNum][version].description;
  const missionArticleTitle = missions[todoNum].version1.articleTitle;
  const missionArticle = missions[todoNum].version1.article;

  return (
    <>
      <Container>
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
                <ScrollView>
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
          <Subtitle></Subtitle>
        </View>
      </Container>
    </>
  );
};
export default Header;

const Container = styled.View`
  flex: 2;
  width: 100%;
`;

const HeaderText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-size: 18px;
`;

const MissionTitle = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 20px;
  margin-right: 8px;
`;

const Subtitle = styled.Text`
  margin-top: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-family: ${(props: IContainerProps) => props.theme.font.thinFont};
`;

const FinishBtn = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.primary};
  font-size: 16px;
`;

const ModalBox = styled.View`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0%;
`;

const ModalContainer = styled.View`
  border-radius: 40px;
  padding: 8%;
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0}; ;
`;

const GrayBG = styled.Pressable`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-color: ${(props: IContainerProps) => props.theme.color.n900}; ;
`;

const MissionContext = styled.Text`
  font-size: 16px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  margin-top: 20px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;
