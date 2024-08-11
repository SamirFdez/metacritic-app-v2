import React from "react";
import { StyleSheet, View } from "react-native";
import { COLOR } from "../../constants/colors"
import { ScreenContainerProps } from "../../interface/screenContainer.interface";

export function ScreenContainer({ children }: ScreenContainerProps) {
  return <View className="flex-1" style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR['primary'],
    paddingTop: 16,
    paddingHorizontal: 8
  },
});