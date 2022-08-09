import SvgIcon from "@assets/SvgIcon";
import { DescCard, DescContainer, Container } from "../components";
import todoNumStore from "@/store/TodoNumStore";

const FirstPage = () => {
  const { nickname } = todoNumStore;
  const contentsText = `좋아요! 그럼 지금부터 ${nickname}님의 마음을 알아보기 위한 질문을 드릴게요.`;
  return (
    <Container>
      <SvgIcon name="bookLines" style={{ position: "relative", top: 100 }} />
      <SvgIcon name="searchHeart" style={{ position: "relative", right: 60 }} />
      <DescContainer>
        <DescCard text={contentsText} />
      </DescContainer>
    </Container>
  );
};

export default FirstPage;
