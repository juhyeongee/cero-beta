import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn, Layout } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import Swiper from "react-native-swiper";
import ToDo from "./components/ToDo";
import MissionBoard from "./components/MissionBoard";

interface IContainerProps {
  theme: ITheme;
}

const Home = () => {
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
              <ToDo />
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
