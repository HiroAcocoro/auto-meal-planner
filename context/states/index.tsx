import AuthContext, { authContext } from "./auth.state";

const contexts = {
	auth: authContext,
};

const loadStates = () => ({
	auth: AuthContext(),
});

export { contexts, loadStates };
