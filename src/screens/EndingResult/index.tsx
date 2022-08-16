import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  Platform,
} from "react-native";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import userInfoStore from "@/store/UserInfoStore";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import { Container } from "./components/Styled";

const EndingResult = () => {
  const [pageNumber, setPageNubmer] = useState(1);
  const { depressionState } = userInfoStore;

  const goNextPage = () => {
    setPageNubmer(pageNumber + 1);
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        {pageNumber === 1 && <FirstPage goNextPage={goNextPage} />}
        {pageNumber === 2 && <SecondPage goNextPage={goNextPage} />}
        {pageNumber === 3 && <ThirdPage goNextPage={goNextPage} />}
        {pageNumber === 4 && <FourthPage />}
      </SafeAreaView>
    </Container>
  );
};

export default EndingResult;
