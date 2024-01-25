import { useSession } from "@/src/context/ctx";
import { router } from "expo-router";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "@/src/constants/Colors";
import { ILoginForm, LoginForm } from "@/src/components/auth/login-form";
import { useForm } from "react-hook-form";
import { AuthApi } from "@/src/api";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { MonoText } from "@/src/components/StyledText";

const width = Dimensions.get("screen").width;
export default function LoginScreen() {
  const sf = useSafeAreaInsets();
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
      console.log("object");
      const res = await AuthApi.login(data);
      console.log(res);
      // signIn("token123");
      // router.replace("/");
    } catch(err: any){
      console.log(err);
      if (err.statusCode === 404) {
        setError("root", {
          message: "Серверт алдаа гарсан байна та түр хүлээнэ үү"
        });
        return;
      }
      setError("username", {
        message: err.error.message
      });
    } finally{
      setLoading(false);
    }
  };
  const top = useCallback(() => {
    return{
      paddingTop: sf.top
    };
  },[sf.top]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.container, top()]}
    >
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <Image contentFit="contain" source={require("../../assets/images/icon.png")} style={styles.logo} />
        <MonoText style={styles.title}>Нэвтрэх</MonoText>
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
  logo: {
       width    : width / 2,
       height   : width / 3,
       alignSelf: "center",
       marginTop: 48
  },
  title: {
    marginVertical: 36,
    textAlign     : "center",
    color         : Colors.white,
    fontWeight    : "bold",
    fontSize      : 32
  }
});
