import { Image, ImageBackground, Text, View } from "react-native";

import { ForYouQuestionAPIResponse } from "./types";
import { QuestionText } from "./QuestionText";
import { AnswerChoices } from "./AnswerChoice";
import { UserName } from "./UserName";
import { QuestionDescription } from "./QuestionDescription";
import { PlayList } from "./Playlist";
import { UsableHeightContext } from "@/contexts/UsableHeightContext";

import HeartIcon from "@/assets/images/heart.svg";
import CommentIcon from "@/assets/images/comment.svg";
import BookmarkIcon from "@/assets/images/bookmark.svg";
import ShareIcon from "@/assets/images/share.svg";
import React, { useContext } from "react";

export const QuestionView: React.FC<{
  question?: ForYouQuestionAPIResponse;
}> = React.memo(({ question }) => {
  const height = useContext(UsableHeightContext);

  return (
    <ImageBackground
      source={{
        uri: question?.image,
      }}
      resizeMode="cover"
    >
      <View
        style={{
          height: height,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              paddingTop: 100,
              flexShrink: 1,
              marginRight: 10,
            }}
          >
            <QuestionText text={question?.question || ""} />
            <AnswerChoices
              choices={question?.options || []}
              questionID={question?.id}
            />
            <UserName name={question?.user.name || ""} />
            <QuestionDescription description={question?.description || ""} />
          </View>
          <View
            style={{
              width: 40,

              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <View
                style={{
                  position: "relative",
                  width: 50,
                  height: 50,
                }}
              >
                <Image
                  source={{ uri: question?.user.avatar }}
                  width={50}
                  height={50}
                />
                <View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 10,
                    backgroundColor: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 14,
                    bottom: -6,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>+</Text>
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <HeartIcon style={{ marginVertical: 3 }} />
              <Text style={{ color: "white" }}>87</Text>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <CommentIcon style={{ marginVertical: 3 }} />
              <Text style={{ color: "white" }}>2</Text>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <BookmarkIcon style={{ marginVertical: 3 }} />
              <Text style={{ color: "white" }}>203</Text>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <ShareIcon style={{ marginVertical: 3 }} />
              <Text style={{ color: "white" }}>17</Text>
            </View>
          </View>
        </View>
        <PlayList playlist={question?.playlist || ""} />
      </View>
    </ImageBackground>
  );
});
