import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { ITheme } from "@/types";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import missions from "@constants/missions";
import userInfoStore from "@/store/UserInfoStore";
import CardDesign from "./CardDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps {
  missionNum: number;
  showToast: () => void;
}

const Card = ({ missionNum }: CardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const missionTitle = missions[missionNum].version1.subtitle;
  const [missionNameFromAsyncStorage, setMissionNameFromAsyncStorage] =
    useState();
  const [completeDateFromAsyncStorage, setCompleteDateFromAsyncStorage] =
    useState();
  const [resultTextFromAsyncStorage, setResultTextFromAsyncStorage] =
    useState();

  const { todoNum } = userInfoStore;

  //TODO: 완료한 미션의 버전따라 카드 타이틀명 설정
  const [imageUri, setImageUri] = useState<string | null>();

  const onClicked = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    AsyncStorage.getItem(`mission${missionNum}Result`).then((result) => {
      if (typeof result === undefined) {
        return null;
      } else if (typeof result === "string") {
        const resultObject = JSON.parse(result);
        setMissionNameFromAsyncStorage(resultObject["missionName"]);
        setCompleteDateFromAsyncStorage(resultObject["completeDate"]);
        setResultTextFromAsyncStorage(resultObject["resultText"]);
      }
    });
    AsyncStorage.getItem(`mission${missionNum}ImageUri`).then((res) => {
      if (res !== null) {
        setImageUri(res);
      }
    });
  }, [todoNum]);
  return (
    <View>
      <DetailModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        missionTitle={missionTitle}
        missionNameFromAsyncStorage={missionNameFromAsyncStorage}
        completeDateFromAsyncStorage={completeDateFromAsyncStorage}
        resultTextFromAsyncStorage={resultTextFromAsyncStorage}
        thisMissionNum={missionNum}
        imageUri={imageUri}
      />
      <CardDesign
        thisMissionNum={missionNum}
        onClicked={onClicked}
        missionNameFromAsyncStorage={missionNameFromAsyncStorage}
        completeDateFromAsyncStorage={completeDateFromAsyncStorage}
      />
    </View>
  );
};

export default Card;
