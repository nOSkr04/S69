import { StyleSheet } from "react-native";
import { Text, TextProps } from "./Themed";
import React from "react";
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.h1]} />;
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: "SpaceMono"
  }
});