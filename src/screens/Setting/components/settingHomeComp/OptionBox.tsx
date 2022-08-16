import SvgIcon from "@/assets/SvgIcon";
import { View, Text, Pressable } from "react-native";
import { SubText, GrayBar } from "../Styled";
import styled from "styled-components/native";

interface IOptionBox {
  text: string;
  icon: JSX.Element;
  arrow: boolean;
  onPress: () => void;
}

export const OptionBox = ({ text, icon, arrow, onPress }: IOptionBox) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          height: 40,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {icon}
          <SubText style={{ marginLeft: 16 }}>{text}</SubText>
        </View>
        {arrow && <SvgIcon name="rightArrow" />}
      </View>
      <GrayBar />
    </Pressable>
  );
};
