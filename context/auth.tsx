import {PropsWithChildren} from "react";
import {loadStates, contexts} from "./states";
import {useStorageState} from "@/hooks/useStoragaState";

const AuthContext = contexts.auth;

const useAuthManager = () => {
  const states = loadStates();
  return states.auth;
};

export function AuthProvider(props: PropsWithChildren) {
  const contextValue = useAuthManager();

  const [[isLoading, session]] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        ...contextValue,
        isLoading,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
