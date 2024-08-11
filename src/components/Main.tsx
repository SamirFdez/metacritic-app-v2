import React, { useState, useEffect } from "react";
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
    <View style={{backgroundColor: "#000"}}>
      <StatusBar style="light" />
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
