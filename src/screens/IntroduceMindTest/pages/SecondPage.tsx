import { ITheme } from "@/types";
import { DescCard, DescContainer, Container } from "../components";
import todoNumStore from "@/store/TodoNumStore";

const SecondPage = () => {
  const { nickname } = todoNumStore;
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
