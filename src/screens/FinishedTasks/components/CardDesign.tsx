import { View, Platform, Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

interface CardProps {
  thisMissionNum: number;
  onClicked: () => void;
  missionNameFromAsyncStorage: string | undefined;
  completeDateFromAsyncStorage: string | undefined;
}

const CardDesign = ({
  thisMissionNum,
  onClicked,
  missionNameFromAsyncStorage,
  completeDateFromAsyncStorage,
}: CardProps) => {
  const year = completeDateFromAsyncStorage?.slice(0, 2);
  const month = completeDateFromAsyncStorage?.slice(2, 4);
  const day = completeDateFromAsyncStorage?.slice(4, 6);

  return (
    <Pressable
      style={[styles.cardContainer, styles.shadow]}
      onPress={onClicked}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <GrayBox>
          <MissionNumText>{thisMissionNum}</MissionNumText>
        </GrayBox>
        <TitleText numberOfLines={1} ellipsizeMode="tail">
          {missionNameFromAsyncStorage}
        </TitleText>
      </View>
      <DateText>
        {year}년 {month}월 {day}일
      </DateText>
      <View style={styles.underBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SpreadText>돌아보기</SpreadText>
          {/* <SvgIcon name="bottomArrow" /> */}
        </View>
      </View>
    </Pressable>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 180,
    padding: 30,
    justifyContent: "space-between",
  },
  underBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

const TitleText = styled.Text`
  width: 90%;
  font-size: 16px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const DateText = styled.Text`
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const GrayBox = styled.View`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 22px;
  border-radius: 5px;
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
`;

const MissionNumText = styled.Text`
  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const SpreadText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n400};
`;
