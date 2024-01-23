import {  StyleSheet, TextInput,    View } from "react-native";
import React, { ReactNode, memo } from "react";
import { Colors } from "@/src/constants/Colors";
import { MonoText } from "../StyledText";
import { Noop } from "react-hook-form";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: ReactNode;
  label?: string;
  onBlur: Noop;
  error?: string;
  secureTextEntry?: boolean
};

const TextField = memo(
  ({ value, onChangeText, placeholder, icon, label,onBlur,error,secureTextEntry }: Props) => {
    return (
      <View>
        {label && <MonoText style={styles.label}>{label}</MonoText>}
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.secondary}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          value={value}
        />
        {error && 
          <MonoText>{error}</MonoText>
        }
      </View>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.secondary,
    padding        : 20,
    color          : Colors.white,
  },
  iconContainer: {
    position: "absolute",
    top     : 10,
    bottom  : 10,
    left    : 20
  },
  label: {},
});
