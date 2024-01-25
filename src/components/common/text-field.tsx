import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { ReactNode, memo, useState } from "react";
import { Colors } from "@/src/constants/Colors";
import { MonoText } from "../StyledText";
import { AntDesign } from "@expo/vector-icons";
type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: ReactNode;
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
};

const TextField = memo(
  ({
    value,
    onChangeText,
    placeholder,
    icon,
    label,
    error,
    secureTextEntry,
  }: Props) => {
    const [focused, setFocused] = useState(false);
    const [secure, setSecure] = useState(secureTextEntry);
    return (
      <>
        {label && <MonoText style={styles.label}>{label}</MonoText>}
        <View>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <TextInput
            onBlur={() => setFocused(false)}
            onChangeText={onChangeText}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            placeholderTextColor={Colors.secondary}
            secureTextEntry={secure}
            style={focused ? styles.focusInput : styles.input}
            value={value}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.iconContainer2}>
              {secure ? (
                <AntDesign color={Colors.white} name="lock1" size={20} />
              ) : (
                <AntDesign color={Colors.white} name="unlock" size={20} />
              )}
            </TouchableOpacity>
          )}
          {error && <MonoText>{error}</MonoText>}
        </View>
      </>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.dark2,
    padding        : 10,
    color          : Colors.white,
    borderRadius   : 16,
    paddingLeft    : 36,
  },
  focusInput: {
    backgroundColor: Colors.primaryT8,
    padding        : 10,
    color          : Colors.white,
    borderRadius   : 16,
    paddingLeft    : 36,
    borderWidth    : 1,
    borderColor    : Colors.primary,
  },
  iconContainer: {
    position: "absolute",
    top     : 15,
    bottom  : 15,
    left    : 10,
    zIndex  : 2,
  },
  iconContainer2: {
    position: "absolute",
    top     : 15,
    bottom  : 15,
    right   : 10,
    zIndex  : 4,
  },
  label: {
    fontWeight  : "700",
    color       : Colors.white,
    marginLeft  : 10,
    marginBottom: 10,
  },
});
