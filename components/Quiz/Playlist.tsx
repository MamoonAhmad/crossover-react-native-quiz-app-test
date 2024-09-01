import { Text, TouchableHighlight, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PlaylistIcon from "@/assets/images/playlist.svg";

export const PlayList: React.FC<{ playlist: string }> = ({ playlist }) => {
  return (
    <TouchableHighlight
      underlayColor={"rgba(0,0,0,0.5)"}
      onPress={() => undefined}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
          paddingHorizontal: 10,
          height: 40,
        }}
      >
        <View
          style={{ alignItems: "center", flexDirection: "row", flexGrow: 1 }}
        >
          <PlaylistIcon style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 14, color: "white" }}>Playlist: </Text>
          <Text style={{ fontSize: 14, color: "white" }}>{playlist}</Text>
        </View>
        <MaterialIcons
          style={{ color: "white", fontSize: 20 }}
          name="chevron-right"
        />
      </View>
    </TouchableHighlight>
  );
};
