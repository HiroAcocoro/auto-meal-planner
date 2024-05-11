import { useContext } from "react";
import { contexts } from "../context/states";

export function useSession() {
	const user = useContext(contexts.auth);
	if (process.env.NODE_ENV !== "production") {
		if (!user) {
			throw new Error("useSession must be wrapped in a <AuthProvider />");
		}
	}

	return user;
}
