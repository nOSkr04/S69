import { StyleSheet, View } from "react-native";
import React, { memo,  } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Colors } from "@/src/constants/Colors";
import { TextField } from "../common/text-field";
import { EvilIcons } from "@expo/vector-icons";
import { Button } from "../common/button";
import { MonoText } from "../StyledText";
export type ILoginForm = {
  username: string;
  password: string;
};

type Props = {
  control: Control<ILoginForm, any>;
  errors: FieldErrors<ILoginForm>;
  onSubmit: any;
  loading: boolean;
};

const LoginForm = memo(({ control, errors, onSubmit, loading }: Props) => {
  
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange,  value } }) => (
          <TextField
            error={errors.username?.message}
            icon={<EvilIcons color={Colors.primary} name="user" size={24} />}
            label="Нэр"
            onChangeText={onChange}
            placeholder="Нэвтрэх нэр"
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <View style={styles.h20} />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange,  value, } }) => (
          <TextField
            error={errors.password?.message}
            icon={<EvilIcons color={Colors.secondary} name="user" size={20} />}
            onChangeText={onChange}
            placeholder="Нэвтрэх нэр"
            secureTextEntry
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <View style={styles.anotherContainer}>
        <View style={styles.divider} />
        <MonoText>Эсвэл</MonoText>
        <View style={styles.divider} />
      </View>
      <Button label="Нэвтрэх" loading={loading} onPress={onSubmit} />
    </View>
  );
});

LoginForm.displayName = "LoginForm";

export { LoginForm };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  h20: {
    height: 20,
  },
  anotherContainer: {
    flexDirection : "row",
    alignItems    : "center",
    marginVertical: 20
  },
  divider: {
    borderWidth: 1,
  },
});
