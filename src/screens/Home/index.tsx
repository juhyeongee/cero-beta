import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import styled, { css } from "styled-components/native";
import { HomeStackScreenProps, ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";
import Swiper from "react-native-swiper";
import ToDo from "./components/ToDo";
import MissionBoard from "./components/MissionBoard";
import userInfoStore from "@/store/UserInfoStore";
import dayjs from "dayjs";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
  const { lastCompletedMissionDate, updateLastCompletedMissionDate } =
    userInfoStore;
  const todayDate = dayjs().format("YYMMDD");

  const navigateToTodayMission = () => {
    navigation.navigate("TodayMission");
  };

  useEffect(() => {
    if (lastCompletedMissionDate === todayDate) {
      console.log("같음");
    } else {
      console.log("안같음");
      updateLastCompletedMissionDate(todayDate);
    }
  }, []);

  //TODO: 미션 14일차 미션 다 끝나면 엔딩보러가기 페이지가 생겨야함 , 미션num이 15일 일떄랑 ㅇ

  return (
    <Container>
      <PlantCont>
        <View style={{ position: "absolute", right: "0%", top: "18%" }}>
          <SvgIcon name="LastWindow" />
        </View>
        <View style={{ position: "absolute", bottom: "20%" }}>
          <SvgIcon name="plant1" />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: Platform.OS === "ios" ? "-10%" : "-15%",
          }}
        >
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
