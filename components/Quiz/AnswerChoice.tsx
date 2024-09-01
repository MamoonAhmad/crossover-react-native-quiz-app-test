import { useEffect, useState } from "react";
import { ForYouQuestionAnswerResponse, MCQOption } from "./types";
import { Image, Text, TouchableHighlight, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const AnswerChoices: React.FC<{
  choices: MCQOption[];
  questionID?: number;
}> = ({ choices, questionID }) => {
  const [answer, setAnswer] = useState<
    ForYouQuestionAnswerResponse | undefined
  >();
  const [chosenAnswer, setChosenAnswer] = useState<MCQOption | undefined>();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    if (!questionID) return;
    getAnswerForQuestion(questionID).then((res) => setAnswer(res));
  }, [questionID]);

  useEffect(() => {
    if (!chosenAnswer || !answer) return;
  }, [chosenAnswer, answer]);

  return (
    <View
      style={{
        flexGrow: 1,
        alignItems: "stretch",
        justifyContent: "flex-end",
      }}
    >
      {choices.map((c) => (
        <ChoiceButton
          key={c.id}
          text={c.answer}
          onSelect={() => !chosenAnswer && setChosenAnswer(c)}
          animate={!!(chosenAnswer && answer)}
          isChosen={c === chosenAnswer}
          isCorrect={
            !!(
              chosenAnswer &&
              answer?.correct_options?.find((a) => c.id === a?.id)
            )
          }
        />
      ))}
    </View>
  );
};

const ChoiceButton: React.FC<{
  text: string;
  onSelect: () => void;
  animate: boolean;
  isCorrect?: boolean;
  isChosen?: boolean;
}> = ({ text, animate, isCorrect, onSelect, isChosen }) => {
  useEffect(() => {
    if (animate) {
      animatedValue.value = withTiming(0, { duration: 400 });
    }
  }, [animate, isCorrect]);

  const animatedValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: animatedValue.value,
      },
    ],
  }));

  return (
    <TouchableHighlight
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
      }}
      underlayColor={"rgba(255, 255, 255, 0.8)"}
      onPress={() => {
        onSelect();
      }}
    >
      <View
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        onLayout={(e) => {
          animatedValue.value = e.nativeEvent.layout.width;
        }}
      >
        <Text
          style={{
            fontSize: 15,
            margin: 10,
            color: "white",
            textShadowOffset: {
              width: 0,
              height: 1,
            },
            textShadowColor: "black",
            textShadowRadius: 5,
          }}
        >
          {text}
        </Text>

        <Animated.View
          style={[
            {
              position: "absolute",
              zIndex: -1,
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: "row",
              paddingRight: 10,
              // width: 321,
              backgroundColor:
                (!isChosen || !animate) && !isCorrect
                  ? "transparent"
                  : isCorrect
                  ? "rgba(60, 179, 113, 0.9)"
                  : "rgba(205, 92, 92, 0.9)",
            },
            animatedStyle,
          ]}
        >
          {isChosen ? (
            isCorrect ? (
              <Image
                source={require("@/assets/images/correct.gif")}
                style={{
                  zIndex: 10,
                  height: "auto",
                  width: 40,
                }}
              />
            ) : (
              <Image
                source={require("@/assets/images/wrong.gif")}
                style={{
                  zIndex: 10,
                  height: "auto",
                  width: 40,
                  marginTop: 10,
                  transform: [
                    {
                      rotate: "180deg",
                    },
                  ],
                }}
              />
            )
          ) : null}
        </Animated.View>
      </View>
    </TouchableHighlight>
  );
};

const getAnswerForQuestion = (questionID: number) => {
  return fetch(
    `https://cross-platform.rp.devfactory.com/reveal?id=${questionID}`
  ).then((res) => res.json());
};
