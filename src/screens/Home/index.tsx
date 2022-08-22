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
import Swiper from "react-native-swiper";
import ToDo from "./components/ToDo";
import NumberBoard from "./components/NumberBoard";
import userInfoStore from "@/store/UserInfoStore";
import dayjs from "dayjs";
import { useEffect } from "react";
import PlantContainer from "./components/PlantContainer";
import { observer } from "mobx-react";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
  const {
    todoNum,
    completeMissionDatesArray,
    updateCompleteMissionDatesArray,
    firstMindTestResultObject,
  } = userInfoStore;
  const { todayDate } = userInfoStore;
  const lastCompletedMissionDate =
    completeMissionDatesArray[completeMissionDatesArray.length - 1];
  //TODO: Array에서 꺼내온 dayjs object에는 왜 .format등 메소드를 못쓴다고 해놓은걸까?

  const navigateToTodayMission = () => {
    navigation.navigate("TodayMission");
  };

  useEffect(() => {
    console.log(userInfoStore);
  }, []);

  //TODO: 미션 14일차 미션 다 끝나면 엔딩보러가기 페이지가 생겨야함 , 미션num이 15일 일떄랑 ㅇ
  const imageSourceArray = [
    require("@/assets/images/1.png"),
    require("@/assets/images/2.png"),
    require("@/assets/images/3.png"),
    require("@/assets/images/4.png"),
    require("@/assets/images/5.png"),
    require("@/assets/images/6.png"),
    require("@/assets/images/7.png"),
    require("@/assets/images/8.png"),
    require("@/assets/images/9.png"),
    require("@/assets/images/10.png"),
    require("@/assets/images/11.png"),
    require("@/assets/images/12.png"),
    require("@/assets/images/13.png"),
    require("@/assets/images/14.png"),
  ];

  const badImageSourceArray = [
    require("@/assets/images/bad1.png"),
    require("@/assets/images/bad2.png"),
    require("@/assets/images/bad3.png"),
    require("@/assets/images/bad4.png"),
    require("@/assets/images/bad5.png"),
    require("@/assets/images/bad6.png"),
    require("@/assets/images/bad7.png"),
    require("@/assets/images/bad8.png"),
    require("@/assets/images/bad9.png"),
    require("@/assets/images/bad10.png"),
    require("@/assets/images/bad11.png"),
    require("@/assets/images/bad12.png"),
    require("@/assets/images/bad13.png"),
    require("@/assets/images/bad14.png"),
  ];

  const plantSource = imageSourceArray[todoNum - 1];

  return (
    <Container>
      <PlantContainer plantSource={plantSource} />
      <View style={{ flex: 0.3 }}>
        <ContentsCont>
          <Bar />
          <View style={{ height: "90%" }}>
            <Swiper
              showsPagination={true}
              paginationStyle={{ bottom: 7 }}
              activeDotColor="#40B08F"
            >
              <ToDo
                todayMissionComplete={todayDate === lastCompletedMissionDate}
                navigateToTodayMission={navigateToTodayMission}
              />
              <NumberBoard />
            </Swiper>
          </View>
        </ContentsCont>
      </View>
    </Container>
  );
};

export default observer(Home);

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  flex: 1;
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
