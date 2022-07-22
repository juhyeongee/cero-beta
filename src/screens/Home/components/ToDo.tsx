import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@navigations/IntroNav";

interface IContainerProps {
  theme: ITheme;
}

const ToDo = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Container>
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
      <ToDoGrayBox>
        <Text
          style={{
            fontFamily: Theme.font.mainFont,
            color: Theme.color.n900,
          }}
        >
          그 사람에게 배울만 했던 점 정리하기
        </Text>
      </ToDoGrayBox>
      <View
        style={{
          width: "100%",
          backgroundColor: Theme.color.n500,
          height: "30%",
        }}
      >
        <BigPrimaryBtn
          text="물 주기"
          onPress={() => navigation.navigate("TodayMission")}
        />
      </View>
    </Container>
  );
};

export default ToDo;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n50};
  padding: 8%;
`;

const GrayText = styled.Text`
  font-size: 12px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const ToDoGrayBox = styled.View`
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  height: 40%;
  padding: 5%;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin-bottom: 5%;
`;
