import { router } from "expo-router";
import { Text, View, TextInput } from "react-native";

import { useSession } from "@/hooks/useSession";
import { useState } from "react";

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
				}}
			>
				Sign In
			</Text>
			<Text
				onPress={() => {
					router.navigate("/signup");
				}}
			>
				Create account
			</Text>
		</View>
	);
}
