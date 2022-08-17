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
import NumberBoard from "./components/NumberBoard";
import userInfoStore from "@/store/UserInfoStore";
import dayjs from "dayjs";
import { useEffect } from "react";
import PlantContainer from "./components/PlantContainer";

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
  const Dot = () => {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.2)",
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
        }}
      />
    );
  };
  return (
    <Container>
      <PlantContainer />
      <View style={{ flex: 0.3 }}>
        <ContentsCont>
          <Bar />
          <View style={{ height: "90%" }}>
            <Swiper
              showsPagination={true}
              paginationStyle={{ bottom: 7 }}
              activeDotColor="#40B08F"
            >
              <ToDo navigateToTodayMission={navigateToTodayMission} />
              <NumberBoard />
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
