import { Pressable } from "react-native";
import { EndingResultText } from "@constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import {
  TextContainer,
  TitleText,
  MainText,
  BtnContainer,
  BtnText,
} from "../components/Styled";

interface IFirstPageProps {
  goNextPage: () => void;
}
const FirstPage = ({ goNextPage }: IFirstPageProps) => {
  return (
    <>
      <TextContainer>
        <TitleText>{EndingResultText["firstPageTitle"]}</TitleText>
        <MainText>{EndingResultText["firstPageSub"]}</MainText>
      </TextContainer>
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

export default FirstPage;
