import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn, Layout } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";

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
      <ContentsCont>
        <Bar />
        <ToDo>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "20%",
            }}
          >
            <GrayText>오늘의 할 일</GrayText>
            <View style={{ flexDirection: "row" }}>
              <GrayText>변경하기 </GrayText>
              <SvgIcon name="refresh" />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: Theme.color.n500,
              height: "40%",
              padding: "5%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10%",
              marginBottom: "5%",
            }}
          >
            <Text
              style={{
                fontFamily: Theme.font.mainFont,
                color: Theme.color.n900,
              }}
            >
              그 사람에게 배울만 했던 점 정리하기
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: Theme.color.n500,
              height: "30%",
            }}
          >
            <BigPrimaryBtn
              text="물 주기"
              onPress={() => console.log("pressed")}
            />
          </View>
        </ToDo>
      </ContentsCont>
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
  flex: 0.3;
  height: 10%;
`;

const Bar = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n0};
  width: 100%;
  height: 10%;
`;

const ToDo = styled.View`
  width: 100%;
  height: 90%;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n50};
  padding: 8%;
`;

const GrayText = styled.Text`
  font-size: 12em;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;
