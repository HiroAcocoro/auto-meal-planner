import { router } from "expo-router";
import { Text, View } from "react-native";

import { useSession } from "@/hooks/useSession";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function SignIn() {
  const { signIn } = useSession();
  const [email, onChangeEmail] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="email"
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="password"
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
      <Text
        style={{ color: "green" }}
        onPress={() => {
          signIn(email, password);
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        Sign In
      </Text>
      <Text>
        Create account
      </Text>
    </View>
  );
}
