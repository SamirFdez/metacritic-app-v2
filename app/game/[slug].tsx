import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, View, ScrollView, Image, Text } from "react-native";
import { ScreenContainer } from "../../src/components/screenContainer/ScreenContainer";
import { GameScore } from "../../src/components/gameCard/GameScore";
import { getGameDetails } from "../../src/lib/metacriticApi";
import { GameDetails } from "../../src/interface/metacrticApi.interface";
import { COLOR } from "../../src/constants/colors";

export default function GameDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const [gameInfo, setGameInfo] = useState<GameDetails>();

  useEffect(() => {
    console.log('Slug:', slug); // Verifica el valor de slug

    if (slug) {
      getGameDetails(slug)
        .then((data) => {
          console.log('Game Info:', data); // Verifica los datos obtenidos
          setGameInfo(data);
        })
        .catch((error) => {
          console.error('Error fetching game details:', error);
        });
    }
  }, [slug]);

  


  return (
    <ScreenContainer>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR["secondary"] },
          headerTintColor: COLOR["primary"],
          headerLeft: () => null,
          headerTitle: gameInfo?.title ? gameInfo.title : "Loading...",
          headerRight: () => null,
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            {/* <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo?.img }}
                style={{ width: 214, height: 294 }}
              />
              <GameScore score={gameInfo?.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-xl">
                {gameInfo?.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo?.description}
              </Text>
            </View> */}
          </ScrollView>
        )}
      </View>
    </ScreenContainer>
  );
}
