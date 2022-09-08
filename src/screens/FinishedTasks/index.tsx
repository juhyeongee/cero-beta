import { View, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Card from "./components/Card";
import Header from "./components/Header";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";
import EmptyCard from "./components/EmptyCard";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
interface IContainerProps {
  theme: ITheme;
}

const FinishedTasks = () => {
  const navigation = useNavigation<any>();
  const { todoNum, completeMissionDatesArray } = userInfoStore;
  const missionArray = [...new Array(todoNum - 1)].map((_, i) => i + 1);
  const { todayDate } = userInfoStore;
  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "아직 미션을 해결하지 못했어요!",
      text2: "차근차근 하나씩 미션을 완료하고 보도록해요!",
      position: "bottom",
    });
  };

  const showTaskDoneToast = () => {
    Toast.show({
      type: "success",
      text1: "오늘의 미션을 이미 완료했어요!",
      text2: "내일 새로운 미션으로 만나요!",
      position: "bottom",
    });
  };

  const navigateToTodayMission = async () => {
    await navigation.navigate("Home");
    setTimeout(() => navigation.navigate("TodayMission"), 600);
  };
  const navigateToHomeAndShowToast = async () => {
    await navigation.navigate("Home");
    setTimeout(() => showTaskDoneToast(), 600);
  };

  const lastCompletedMissionDate =
    completeMissionDatesArray[completeMissionDatesArray.length - 1];

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 4 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {missionArray.map((index) => (
              <Card showToast={showToast} key={index} missionNum={index} />
            ))}
            {todoNum !== 15 && (
              <EmptyCard
                onPress={
                  lastCompletedMissionDate === todayDate
                    ? navigateToHomeAndShowToast
                    : navigateToTodayMission
                }
              />
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default observer(FinishedTasks);

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  padding: 16% 8% 0% 8%;
`;
