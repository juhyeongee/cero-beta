import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { ITheme } from "@/types";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import missions from "@constants/missions";
import userInfoStore from "@/store/UserInfoStore";
import CardDesign from "./CardDesign";

interface CardProps {
  missionNum: number;
  showToast: () => void;
}
const Card = ({ missionNum, showToast }: CardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { todoNum, versionNum } = userInfoStore;
  const missionTitle = missions[missionNum].version1.subtitle;
  const type = missions[missionNum].version1.type;
  //TODO: 완료한 미션의 버전따라 카드 타이틀명 설정

  const onClicked = () => {
    if (missionNum > todoNum) {
      showToast();
    } else {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <View>
      <DetailModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        missionTitle={missionTitle}
        missionType={type}
      />
      <CardDesign
        type={type}
        missionTitle={missionTitle}
        thisMissionNum={missionNum}
        onClicked={onClicked}
      />
    </View>
  );
};

export default Card;
