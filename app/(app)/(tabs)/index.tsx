import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSession } from "@/src/context/ctx";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const { session, signOut } = useSession();
  return (
    <View style={styles.container}>
      <Link href={"/(app)/article/123"}>
        <Text style={styles.title}>Tab On1e</Text>
      </Link>
      <Text onPress={signOut} style={styles.title}>{session}!!</Text>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex          : 1,
    alignItems    : "center",
    justifyContent: "center",
  },
  title: {
    fontSize  : 20,
    fontWeight: "bold",
  },
});
