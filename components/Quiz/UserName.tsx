import { Text } from "react-native";

export const UserName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Text
      style={{
        paddingTop: 10,
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
      }}
    >
      {name}
    </Text>
  );
};
