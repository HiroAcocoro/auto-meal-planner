import { Alert, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { useSession } from "@/hooks/useSession";

const showAlert = () =>
	Alert.alert(
		"Passwords doesn't match",
		"check for typos",
		[
			{
				text: "Cancel",
			},
		],
		{
			cancelable: true,
		},
	);

export default function SignUp() {
	const { signUp } = useSession();
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");
	const [confirmPassword, onChangeConfirmPassword] = useState("");

	function signUpUser() {
		if (password !== confirmPassword) {
			console.log("err here");
			showAlert();
		}
		if (password === confirmPassword) {
			signUp(email, password);
		}
	}

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
			<TextInput
				placeholder="confirm password"
				onChangeText={onChangeConfirmPassword}
				value={confirmPassword}
				secureTextEntry={true}
			/>
			<Text
				style={{ color: "green" }}
				onPress={() => {
					signUpUser();
				}}
			>
				Sign Up
			</Text>
		</View>
	);
}
