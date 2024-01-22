import { SessionProvider, useSession } from "@/src/context/ctx";
import { useFonts } from "expo-font";
import { Slot, } from "expo-router";
import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";
export default function RootLayout() {
  const { isLoading } = useSession();
  const [loaded, error] = useFonts({
    SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded || isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading, loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
