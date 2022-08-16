import { View, Text, Pressable } from "react-native";
import { EndingResultText } from "@constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import {
  TitleText,
  MainText,
  BtnContainer,
  BtnText,
} from "../components/Styled";

interface IFirstPageProps {
  goNextPage: () => void;
}
const SecondPage = ({ goNextPage }: IFirstPageProps) => {
  return (
    <>
      <TitleText>{EndingResultText["secondPageTitle"]}</TitleText>
      <MainText>{EndingResultText["secondPageSub"]}</MainText>
      <BtnContainer>
        <Pressable
          onPress={goNextPage}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <BtnText>다음으로 넘어가기</BtnText>
          <SvgIcon name="rightPrimaryTriangle" />
        </Pressable>
      </BtnContainer>
    </>
  );
};

export default SecondPage;
