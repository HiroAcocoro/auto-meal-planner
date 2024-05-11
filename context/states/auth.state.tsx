import {axiosPost} from "@/api";
import {useStorageState} from "@/hooks/useStoragaState";
import {router} from "expo-router";
import {createContext, useState} from "react";

export const authContext = createContext<{
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: () => void;
  session?: string | null;
  setSession: (value: string | null) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  signIn: (email: string, password: string) => null,
  signOut: () => null,
  signUp: () => null,
  session: null,
  setSession: () => null,
  isLoading: false,
  setIsLoading: () => false,
});

const AuthContext = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [[session], setSession] = useStorageState("session");

  async function signIn(email: string, password: string) {
    await axiosPost("/signin", {
      email,
      password,
    })
      .catch(function error() {
        console.log(error);
      })
      .then(function (response) {
        if (response.data.token) {
          setSession(response.data.token);
        }
      });
  }

  function signUp() {}

  function signOut() {
    setSession(null);
    router.replace("/signin");
  }

  return {
    session,
    setSession,
    signIn,
    signOut,
    signUp,
    isLoading,
    setIsLoading,
  };
};

export default AuthContext;
