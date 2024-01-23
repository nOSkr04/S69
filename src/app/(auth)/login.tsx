import { useSession } from "@/src/context/ctx";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/src/constants/Colors";
import { ILoginForm, LoginForm } from "@/src/components/auth/login-form";
import { useForm } from "react-hook-form";
import { AuthApi } from "@/src/api";
export default function LoginScreen() {
  const [loading,setLoading] = useState(false);
  const { signIn } = useSession();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm<ILoginForm>();

  const onSubmit = async (data: ILoginForm) => {
    setLoading(true);
    try{
      const res = await AuthApi.login(data);
      console.log(res);
      signIn("token123");
      router.replace("/");
    } catch(err: any){
      if (err.statusCode === 404) {
        setError("root", {
          message: "Серверт алдаа гарсан байна та түр хүлээнэ үү"
        });
        return;
      }
      setError("name", {
        message: err.error.message
      });
    } finally{
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <LoginForm control={control} errors={errors} loading={loading} onSubmit={handleSubmit(onSubmit)}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.background,
  },
});
