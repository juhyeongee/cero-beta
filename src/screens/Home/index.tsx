import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  Platform,
  Modal,
} from "react-native";
import styled, { css } from "styled-components/native";
import { HomeStackScreenProps, ITheme } from "@/types";
import Swiper from "react-native-swiper";
import {
  NumberBoard,
  ToDo,
  PlantContainer,
  LastWateringModal,
} from "./components";
import userInfoStore from "@/store/UserInfoStore";
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import currentPageStore from "@/store/CurrentPageStore";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
  const { todoNum, completeMissionDatesArray } = userInfoStore;
  const { isCurriculumEnd } = currentPageStore;

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
    require("@/assets/images/15.png"),
    require("@/assets/images/16.png"),
  ];

  const plantSource = isCurriculumEnd
    ? imageSourceArray[imageSourceArray.length - 1]
    : imageSourceArray[todoNum - 1];

  return (
    <Container>
      <PlantContainer plantSource={plantSource} />
      {!isCurriculumEnd && (
        <View style={{ flex: 0.3 }}>
          <ContentsCont>
            {todoNum === 15 ? (
              <LastWateringModal />
            ) : (
              <>
                <Bar />
                <View style={{ height: "90%" }}>
                  <Swiper
                    showsPagination={true}
                    paginationStyle={{ bottom: 7 }}
                    activeDotColor="#40B08F"
                  >
                    <ToDo
                      navigateToTodayMission={() =>
                        navigation.navigate("TodayMission")
                      }
                    />
                    <NumberBoard />
                  </Swiper>
                </View>
              </>
            )}
          </ContentsCont>
        </View>
      )}
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
