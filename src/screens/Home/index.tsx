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
import AutoHeightImage from "react-native-auto-height-image";
import SvgIcon from "@/assets/SvgIcon";
import { BigPrimaryBtn } from "@/components";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
  const { todoNum, completeMissionDatesArray } = userInfoStore;
  const { isCurriculumEnd } = currentPageStore;

  //TODO: 미션 14일차 미션 다 끝나면 엔딩보러가기 페이지가 생겨야함 , 미션num이 15일 일떄랑 ㅇ
  const imageSourceArray = [
    require("@/assets/images/mansu-day0.png"),
    require("@/assets/images/mansu-day1.png"),
    require("@/assets/images/mansu-day2.png"),
    require("@/assets/images/mansu-day3.png"),
    require("@/assets/images/mansu-day4.png"),
    require("@/assets/images/mansu-day5.png"),
    require("@/assets/images/mansu-day6.png"),
    require("@/assets/images/mansu-day7.png"),
    require("@/assets/images/mansu-day8.png"),
    require("@/assets/images/mansu-day9.png"),
    require("@/assets/images/mansu-day10.png"),
    require("@/assets/images/mansu-day11.png"),
    require("@/assets/images/mansu-day12.png"),
    require("@/assets/images/mansu-day13.png"),
    require("@/assets/images/mansu-day14.png"),
    require("@/assets/images/mansu-day15.png"),
  ];

  const plantSource = isCurriculumEnd
    ? require("@/assets/images/lastFlower.png")
    : imageSourceArray[todoNum - 1];

  return (
    <>
      {!isCurriculumEnd ? (
        <Container>
          <PlantContainer plantSource={plantSource} />
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
        </Container>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <View
            style={{
              flex: 1.2,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginBottom: 20,
                fontWeight: "600",
                color: "#5E686A",
              }}
            >
              {userInfoStore.nickname}님의 꽃이 화사하게 피었어요.
            </Text>

            <BigPrimaryBtn
              text="새로 팀에 말 걸기"
              onPress={() => navigation.navigate("FeedBack")}
            />
          </View>
          <View style={{ flex: 3.5, justifyContent: "flex-end" }}>
            <AutoHeightImage width={240} source={plantSource} />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <SvgIcon name="LastPot" />
          </View>
        </View>
      )}
    </>
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
