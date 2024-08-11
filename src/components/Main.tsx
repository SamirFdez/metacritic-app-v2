import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { AnimatedGameCard } from "./gameCard/AnimatedGameCard";
import { getBestGames } from "../lib/metacriticApi";
import { Game } from "../interface/metacrticApi.interface";
import { StatusBar } from "expo-status-bar";

import { ScreenContainer } from "./screenContainer/ScreenContainer";

export function Main() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getBestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View>
      <StatusBar style="light" />
      <Text style={{ color: "white" }}> Adios </Text>
      {!games.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
