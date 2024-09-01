import React from "react";
import { Dimensions } from "react-native";

// Provides the actual usable height for the items to be used in flat list
// content container for list prevents components from defining the
// height of 100%.
export const UsableHeightContext = React.createContext(
  Dimensions.get("window").height
);
