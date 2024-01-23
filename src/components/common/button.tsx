import { ActivityIndicator, StyleSheet,  TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Colors } from "@/src/constants/Colors";
import { MonoText } from "../StyledText";

type Props ={
    label: string;
    loading?: boolean
    onPress?: () => void
}

const Button = memo(({ label, loading,onPress }: Props) => {
    if(loading){
        return (
          <TouchableOpacity disabled={true} style={styles.loading}>
            <MonoText style={styles.label}>{label}</MonoText>
            <ActivityIndicator color={Colors.white} size={"small"}     />
          </TouchableOpacity>
        );
    }
    return (
      <TouchableOpacity  onPress={onPress} style={styles.container}>
        <MonoText style={styles.label}>{label}</MonoText>
      </TouchableOpacity>
    );
  });

  Button.displayName="Button";

export { Button };

const styles = StyleSheet.create({
    container: {
        backgroundColor  : Colors.primary,
        paddingVertical  : 18,
        paddingHorizontal: 16,
        borderRadius     : 16
    },
    loading: {
        backgroundColor  : Colors.primary,
        flexDirection    : "row",
        alignItems       : "center",
        justifyContent   : "center",
        paddingVertical  : 18,
        paddingHorizontal: 16
    },
    label: {
        fontSize  : 16,
        fontWeight: "600",
        textAlign : "center",
        color     : Colors.white
    }
});