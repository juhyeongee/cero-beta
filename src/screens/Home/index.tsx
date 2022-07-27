import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn, Layout } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import Swiper from "react-native-swiper";
import ToDo from "./components/ToDo";
import MissionBoard from "./components/MissionBoard";
import missions from "@constants/missions";
import { useState, useEffect } from "react";

interface IContainerProps {
  theme: ITheme;
}
interface MissionProps {
  todayMissions: { [key: string]: string };
  rotateVersionNum: () => void;
}

const Home = ({}: MissionProps) => {
  const [versionNum, setVersionNum] = useState<number>(0);
  const MISSION_NUMBER = 5;
  //TODO: 임시로 정해놓은 미션 번호 상수, 전역으로 미션 날짜 앱로딩때 설정되면 그 값으로 초기화 설정 필요.
  const todayMissionObject = missions[MISSION_NUMBER];
  const version = Object.keys(todayMissionObject)[versionNum];
  const todayMissions = todayMissionObject[version];

  const rotateVersionNum = () => {
    let length = Object.keys(todayMissionObject).length - 1;
    console.log(length);
    if (versionNum < length) {
      setVersionNum(versionNum + 1);
    } else {
      setVersionNum(0);
    }
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
              <ToDo
                rotateVersionNum={rotateVersionNum}
                todayMissions={todayMissions}
              />
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
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n200};
  flex: 1;
`;
const PlantCont = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.7;
`;

const ContentsCont = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n500};
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 10%;
`;

const Bar = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n0};
  width: 100%;
  flex: 1;
`;
