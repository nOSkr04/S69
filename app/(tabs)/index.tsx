import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSession } from "@/src/context/ctx";

export default function TabOneScreen() {
  const { session } = useSession();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>{session}!!</Text>
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
