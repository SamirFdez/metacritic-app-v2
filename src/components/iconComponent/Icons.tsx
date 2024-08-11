import React from "react";
import { View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { IconProps } from "../../interface/icon.interface";
import { fontScale } from "nativewind";

export const Icons = ({ name, size, color, iconFamily }: IconProps) => {
  iconFamily = iconFamily?.toLocaleLowerCase();
  return (
    <>
      <View>
        {iconFamily === "simplelineicons" ? (
          <SimpleLineIcons
            name={name as keyof typeof SimpleLineIcons.glyphMap}
            size={size}
            color={color}
          />
        ) : iconFamily === "fontawesome6" ? (
          <FontAwesome6
            name={name as keyof typeof FontAwesome6.gryphMap}
            size={size}
            color={color}
          />
        ) : null}
      </View>
    </>
  );
};
