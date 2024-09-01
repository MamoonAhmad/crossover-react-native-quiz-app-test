import { Text } from "react-native";




export const QuestionDescription: React.FC<{ description: string }> = ({ description }) => {
    return (
      <Text
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          color: "white",
        }}
      >
        {description}
      </Text>
    );
  };