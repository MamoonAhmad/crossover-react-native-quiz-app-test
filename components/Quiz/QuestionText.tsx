import { Text, View } from "react-native";

export const QuestionText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {text.split(" ").map((t, i) => (
        <Text
          key={t + i}
          style={{
            fontSize: 25,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            textShadowColor: "black",
            textShadowRadius: 10,
          }}
        >
          {" "}
          {t}{" "}
        </Text>
      ))}
    </View>
  );
};
