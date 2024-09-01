import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";

import SearchIcon from "@/assets/images/search.svg";
import { useEffect, useState } from "react";

const { width } = Dimensions.get("window");

export const TopBar = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTimeSpent((t) => t + 1);
    }, 60000);
  }, []);
  return (
    <View
      style={{
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="timer" color={"white"} style={{ fontSize: 25 }} />
        <Text style={{ color: "white" }}>
          {`${timeSpent < 10 ? "0" : ""}${timeSpent}`}m
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: -1,
          width: width,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            For You
          </Text>
          <View
            style={{
              height: 3,
              backgroundColor: "white",
              width: "70%",
              marginTop: 3,
            }}
          />
        </View>
      </View>
      <SearchIcon />
    </View>
  );
};
