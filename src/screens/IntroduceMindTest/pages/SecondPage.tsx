import { ITheme } from "@/types";
import { DescCard, DescContainer, Container } from "../components";
import userInfoStore from "@/store/UserInfoStore";

const SecondPage = () => {
  const { nickname } = userInfoStore;
  const contentsText = `답변에 따라 ${nickname}님의 마음을 본 뜬 씨앗이 만들어집니다.`;

  return (
    <Container>
      <DescContainer>
        <DescCard text={contentsText} />
      </DescContainer>
    </Container>
  );
};

export default SecondPage;
