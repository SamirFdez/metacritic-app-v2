import React from "react";
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { Logo } from "../src/components/logo/Logo";
import { Icons } from "../src/components/iconComponent/Icons";
import { COLOR } from "../src/constants/colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLOR["primary"] },
        headerTitle: "",
        headerLeft: () => <Logo />,
        headerRight: () => (
          <Link asChild href="/about">
            <Pressable>
              {({ pressed }) => (
                <Icons
                  name="circle-info"
                  size={24}
                  color="white"
                  iconFamily="FontAwesome6"
                  style={{opacity: pressed ? 0.5 : 1}}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}
