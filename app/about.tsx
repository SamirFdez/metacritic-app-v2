import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer } from "../src/components/screenContainer/ScreenContainer";

export default function About() {
  return (
    <ScreenContainer>
      <View>
        <Text style={{ fontSize: 32, color: "white" }}>
          HOLA AMIGO, ESTE ES EL ABOUT
        </Text>
      </View>
    </ScreenContainer>
  );
}
