import { PropsWithChildren } from "react";
import { loadStates, contexts } from "./states";
import { useStorageState } from "@/hooks/useStoragaState";
import { axiosPost } from "@/api";

const AuthContext = contexts.auth;

const useAuthManager = () => {
	const states = loadStates();
	return states.auth;
};

export function AuthProvider(props: PropsWithChildren) {
	const contextValue = useAuthManager();

	const [[isLoading, sessionToken], setSessionToken] =
		useStorageState("sessionToken");

	return (
		<AuthContext.Provider
			value={{
				...contextValue,
				isLoading,
				sessionToken,
				signIn: async () => {
					// Perform sign-in logic here
					const response = await axiosPost("/login", {
						email: "test1@mail.com",
						password: "secret123",
					});
					console.log(response.data.token);
					setSessionToken(response.data.token);
				},
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
