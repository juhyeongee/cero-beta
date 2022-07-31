import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { HomeStackScreenProps, ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";
import Swiper from "react-native-swiper";
import ToDo from "./components/ToDo";
import MissionBoard from "./components/MissionBoard";
import missions from "@constants/missions";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { HomeStackParamList } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
  const { missionNum } = route.params;
  const [versionNum, setVersionNum] = useState<number>(0);
  //TODO: 임시로 정해놓은 미션 번호 상수, 전역으로 미션 날짜 앱로딩때 설정되면 그 값으로 초기화 설정 필요.
  const todayMissionObject = missions[missionNum];
  const version = Object.keys(todayMissionObject)[versionNum];
  const navigateToTodayMission = () => {
    navigation.navigate("TodayMission");
  };
  return (
    <Container>
      <PlantCont>
        <View style={{ position: "absolute", right: "0%", top: "18%" }}>
          <SvgIcon name="LastWindow" />
        </View>
        <View style={{ position: "absolute", bottom: "20%" }}>
          <SvgIcon name="plant1" />
        </View>
        <View style={{ position: "absolute", bottom: "-10%" }}>
          <SvgIcon name="LastPot" />
        </View>
      </PlantCont>
      <View style={{ flex: 0.3 }}>
        <ContentsCont>
          <Bar />
          <View style={{ height: "90%" }}>
            <Swiper showsPagination={false}>
              <ToDo navigateToTodayMission={navigateToTodayMission} />
              <MissionBoard />
            </Swiper>
          </View>
        </ContentsCont>
      </View>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  flex: 1;
`;
const PlantCont = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.7;
`;

const ContentsCont = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 10%;
`;

const Bar = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  width: 100%;
  flex: 1;
`;
