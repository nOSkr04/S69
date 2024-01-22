import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
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
