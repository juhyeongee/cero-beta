import styled from "styled-components/native";
import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { ITheme } from "@/types";
import { useState } from "react";
import Tag from "./Tag";
import DetailModal from "./DetailModal";
import missions from "@constants/missions";
import todoNumStore from "@/store/TodoNumStore";
import Toast from "react-native-toast-message";

interface IContainerProps {
  theme: ITheme;
}

interface CardProps {
  missionNum: string;
}
const Card = ({ missionNum }: CardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const thisMissionNum = parseInt(missionNum);
  const { todoNum, versionNum } = todoNumStore;

  const missionTitle = missions[thisMissionNum].version1.subtitle;
  const type = missions[thisMissionNum].version1.type;
  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "아직 미션을 해결하지 못했어요!",
      text2: "차근차근 하나씩 미션을 완료하고 보도록해요!",
      position: "bottom",
    });
  };
  const onClicked = () => {
    if (thisMissionNum > todoNum) {
      showToast();
    } else {
      setModalVisible(!modalVisible);
    }
  };

  return (
    // <BGPhoto
    //   source={require("@assets/images/exampleImage.png")}
    //   resizeMode="cover"
    //   style={{ flex: 1 }}
    // >
    <View>
      <DetailModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        missionTitle={missionTitle}
      />
      {type === "both" && (
        <>
          <ImageBackground
            resizeMode="cover"
            source={require("@assets/images/exampleImage.png")}
            style={{ marginBottom: 16 }}
            imageStyle={{ borderRadius: 13 }}
          >
            <Pressable onPress={showToast}>
              <BGPhoto>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Title>{thisMissionNum}</Title>
                </View>
                <View style={{ flex: 1.4, justifyContent: "center" }}>
                  <MissionNum>{missionTitle}</MissionNum>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Date>2022 5월 28일</Date>
                </View>
                <Tags>
                  <Tag type={type} />
                </Tags>
              </BGPhoto>
            </Pressable>
          </ImageBackground>
        </>
      )}
      {type === "text" && (
        <>
          <Container onPress={onClicked}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Title>{thisMissionNum}</Title>
            </View>
            <View style={{ flex: 1.4, justifyContent: "center" }}>
              <MissionNum>{missionTitle}</MissionNum>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Date>2022 5월 28일</Date>
            </View>
            <Tag type={type} />
          </Container>
        </>
      )}
      {type === "photo" && (
        <>
          <ImageBackground
            resizeMode="cover"
            source={require("@assets/images/exampleImage.png")}
            style={{ marginBottom: 16 }}
            imageStyle={{ borderRadius: 13 }}
          >
            <Pressable onPress={onClicked}>
              <BGPhoto>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Title>{thisMissionNum}</Title>
                </View>
                <View style={{ flex: 1.4, justifyContent: "center" }}>
                  <MissionNum>{missionTitle}</MissionNum>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Date>2022 5월 28일</Date>
                </View>
                <Tags>
                  <Tag type={type} />
                </Tags>
              </BGPhoto>
            </Pressable>
          </ImageBackground>
        </>
      )}
    </View>
  );
};

const BGPhoto = styled.View`
  padding: 8%;
  padding-top: 12%;
  padding-bottom: 12%;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  flex: 1;
`;

const Container = styled.Pressable`
  background-color: ${(props: IContainerProps) => props.theme.color.n400};
  padding: 8%;
  padding-top: 12%;
  padding-bottom: 12%;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  flex: 1;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
const MissionNum = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-size: 24px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
const Date = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};

  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n800};
`;
const Tags = styled.View`
  flex: 1;
`;

export default Card;
