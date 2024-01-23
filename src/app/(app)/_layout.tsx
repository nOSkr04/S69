import { useSession } from "@/src/context/ctx";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
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

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
