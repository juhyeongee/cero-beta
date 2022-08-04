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
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";

interface IContainerProps {
  theme: ITheme;
}

const Home = ({ route, navigation }: HomeStackScreenProps<"Home">) => {
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

export const MissionTitleText = styled.Text`
  flex-direction: column;
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-size: ${Platform.select({
    ios: css`
      ${fontsizeRatio(24)}px
    `,
    android: css`
      ${fontsizeRatio(18)}px
    `,
  })};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
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
