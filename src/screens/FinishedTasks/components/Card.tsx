import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { ITheme } from "@/types";
import { useState } from "react";
import DetailModal from "./DetailModal";
import missions from "@constants/missions";
import todoNumStore from "@/store/TodoNumStore";
import Toast from "react-native-toast-message";
import CardDesign from "./CardType/CardDesign";

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
  //TODO: 완료한 미션의 버전따라 카드 타이틀명 설정
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
  const imageSource = require("@assets/images/exampleImage.png");
  //TODO: 텍스트 콘텐츠와 사진이미지별로 BG이미지 다르게 설정하기

  return (
    <View>
      <DetailModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        missionTitle={missionTitle}
        missionType={type}
      />
      <CardDesign
        imageSource={imageSource}
        type={type}
        missionTitle={missionTitle}
        thisMissionNum={thisMissionNum}
        onClicked={onClicked}
      />
    </View>
  );
};

export default Card;
