import {
  View,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";

import { ForYouQuestionAPIResponse } from "@/components/Quiz/types";
import { TopBar } from "@/components/TopBar";
import { QuestionView } from "@/components/Quiz/QuestionView";
import { UsableHeightContext } from "@/contexts/UsableHeightContext";

const { width } = Dimensions.get("window");

// Number of questions to load initially
const INITIAL_QUESTION_TO_LOAD = 3;

export default function HomeScreen() {
  const [data, setData] = useState<(ForYouQuestionAPIResponse | undefined)[]>(
    []
  );

  // Load initial questions
  useEffect(() => {
    for (let a = 0; a < INITIAL_QUESTION_TO_LOAD; a++) {
      getNextQuestion().then((res) => setData((d) => [...d, res])).catch;
    }
  }, []);

  const [useHeight, setUseHeight] = useState(0);

  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      {/* Top Bar */}
      <View style={{ width, position: "relative", zIndex: 10 }}>
        <View style={{ left: 0, top: 0, position: "absolute", width }}>
          <TopBar />
        </View>
      </View>

      {/* Infinite Scroll */}
      <View
        onLayout={(l) => {
          // This will acquire the remaining height on the screen
          // excluding the bottom nav
          // This will let each item in the Infinite scroll to have the consistent height
          setUseHeight(l.nativeEvent.layout.height);
        }}
        style={{
          height: "100%",
        }}
      >
        <UsableHeightContext.Provider value={useHeight}>
          <FlatList
            data={data}
            keyExtractor={(q, i) => String(q?.id) + i?.toString()}
            renderItem={(item) => {
              return <QuestionView question={item.item} />;
            }}
            pagingEnabled
            horizontal={false}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              // Retrieve next question
              getNextQuestion().then((res) => {
                setData((d) => [...d, res]);
              });
            }}
            onEndReachedThreshold={3}
          />
        </UsableHeightContext.Provider>
      </View>
    </SafeAreaView>
  );
}

const getNextQuestion = () => {
  return fetch("https://cross-platform.rp.devfactory.com/for_you").then((res) =>
    res.json()
  );
};
