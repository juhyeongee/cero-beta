import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import { questionObj } from "../../constants/mindtestProperties";
import IntroduceMindTest from "./IntroduceMindTest";
import { useNavigation } from "@react-navigation/native";
import TestPage from "./TestPage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/IntroNav";

const MindTest = () => {
  const [showIntroduceScreen, setShowIntroduceScreen] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <>
      {showIntroduceScreen ? (
        <IntroduceMindTest setShowIntroduceScreen={setShowIntroduceScreen} />
      ) : (
        <Swiper loop={false} showsPagination={false}>
          {Object.keys(questionObj).map((item, index) => (
            <TestPage
              pageNumber={parseInt(item)}
              key={index}
              submitPress={() => navigation.navigate("Home")}
            />
          ))}
        </Swiper>
      )}
    </>
  );
};

export default MindTest;
