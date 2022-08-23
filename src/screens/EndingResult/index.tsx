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
import { EndingStackScreenProps } from "@/types";

const EndingResult = ({
  route,
  navigation,
}: EndingStackScreenProps<"LastLoadingScreen">) => {
  const [pageNumber, setPageNubmer] = useState(1);

  const goNextPage = () => {
    setPageNubmer(pageNumber + 1);
  };

  const navigateToEndingMovie = () => {
    navigation.navigate("EndingMovie");
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        {pageNumber === 1 && <FirstPage goNextPage={goNextPage} />}
        {pageNumber === 2 && <SecondPage goNextPage={goNextPage} />}
        {pageNumber === 3 && <ThirdPage goNextPage={goNextPage} />}
        {pageNumber === 4 && (
          <FourthPage navigateToEndingMovie={navigateToEndingMovie} />
        )}
      </SafeAreaView>
    </Container>
  );
};

export default EndingResult;
