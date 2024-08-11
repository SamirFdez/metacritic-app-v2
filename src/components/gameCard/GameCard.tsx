import React from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  Dimensions,
  Pressable,
  View,
  Image,
  Text,
} from "react-native";
import { GameScore } from "./GameScore";
import { GameCardProps } from "../../interface/gameCard.interface";

const { width } = Dimensions.get("screen");

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link href={`/game/${game.slug}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <View className="flex flex-row rounded-[10px] bg-neutral-900 p-2.5 mb-2.5">
            <Image source={{ uri: game.image }} style={styles.image} />
            <View className="flex flex-col justify-center">
              <View className="flex flex-row justify-start items-center">
                <Text
                  className="text-white font-bold text-lg mb-1.5"
                  style={styles.title}
                  numberOfLines={2}
                >
                  {game.title}
                </Text>
                <GameScore score={game.score} maxScore={100} />
              </View>
              <View>
                <Text style={styles.description} numberOfLines={4}>
                  {game.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.25,
    height: 147,
    objectFit: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    width: width * 0.55,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
    color: "#ccc",
    width: width * 0.65,
    maxWidth: "100%",
  },
});
