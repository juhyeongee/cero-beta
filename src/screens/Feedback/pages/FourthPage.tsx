import { View, Text, Pressable, Platform } from "react-native";
import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { BigPrimaryBtn, MultiChoiceBtn } from "@/components";
import AutoHeightImage from "react-native-auto-height-image";
import { ITheme } from "@/types";
import {
  TitleText,
  GrayBtn,
  MainText,
  BtnInnerText,
  Container,
  SubText,
} from "../components/Styled";
import { GrayBox } from "../components/GrayBox";

interface IContainerProps {
  theme: ITheme;
}
const FourthPage = () => {
  const array: string[][] = [
    ["💬", "커뮤니티", `따뜻하고 유쾌한 사람들과\n함께 성장하길 원한다면`],
    [
      "🎥",
      "콘텐츠 (아티클, 영상)",
      `연애와 이별, 상실과 회복에\n도움을 주는 프리미엄 콘텐츠`,
    ],
    ["🪴", "화분 꾸미기", `이름표라도 붙여주고 싶은 마음\n다 알고 있어요`],
    ["💌", "친구 초대하기", `이별한 친구에게 줄 것, \n기댈 어깨와 새로 초대권`],
    [
      "🌱",
      "새로운 마음씨앗 키우기",
      `또 한 번의 이별이 찾아왔다면\n 새로운 마음씨앗을 심을 때`,
    ],
    ["🏅", "배지 콜렉션", "더 오래, 더 편하게 함께한\n새로미를 위한 명예훈장"],
  ];
  return (
    <View
      style={{
        padding: "8%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <SvgIcon name="LogoWithTitle" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SubText>더 좋은 새로가 되기 위해 열심히</SubText>
        <SubText>새로운 기능을 준비하고 있어요.</SubText>
        <SubText>가장 흥미있는 기능 하나만 골라주시겠어요?</SubText>
      </View>
      <BoxContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <GrayBox textArray={array[0]} />
          <GrayBox textArray={array[1]} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <GrayBox textArray={array[2]} />
          <GrayBox textArray={array[3]} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <GrayBox textArray={array[4]} />
          <GrayBox textArray={array[5]} />
        </View>
      </BoxContainer>
    </View>
  );
};

export default FourthPage;

const BoxContainer = styled.Pressable`
  padding: 3%;
  justify-content: space-around;
  flex: 3;
  width: 100%;
`;

const Box = styled.Pressable`
  padding: 3% 3%;
  height: 120px;
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  width: 46%;
`;

const ImogiText = styled.Text`
  font-size: 20px;
`;

const GrayBoxInnerTitle = styled.Text``;

const GrayBoxInnerText = styled.Text`
  font-size: 9px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;
