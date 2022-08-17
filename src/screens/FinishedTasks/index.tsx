import { View, Text, SafeAreaView, ScrollView, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Card from "./components/Card";
import missions from "@constants/missions";
import Header from "./components/Header";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";
import EmptyCard from "./components/EmptyCard";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { MainBottomTabScreenProp } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

const FinishedTasks = () => {
  const navigation = useNavigation<any>();
  const { todoNum } = userInfoStore;
  const missionArray = [...new Array(todoNum - 1)].map((_, i) => i + 1);
  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "아직 미션을 해결하지 못했어요!",
      text2: "차근차근 하나씩 미션을 완료하고 보도록해요!",
      position: "bottom",
    });
  };

  const navigateToTodayMission = async () => {
    await navigation.navigate("Home");
    setTimeout(() => navigation.navigate("TodayMission"), 600);
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 4 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {missionArray.map((index) => (
              <Card showToast={showToast} key={index} missionNum={index} />
            ))}
            {todoNum !== 14 && <EmptyCard onPress={navigateToTodayMission} />}
          </ScrollView>
        </View>
        {/* TODO: ScrollView => Flatlist로 변환 */}
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
