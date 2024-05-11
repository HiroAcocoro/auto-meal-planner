import {createContext, useState} from "react";

export const authContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
  sessionToken?: string | null;
  setSessionToken: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
  sessionToken: null,
  setSessionToken: () => null,
  isLoading: false,
  setIsLoading: () => false,
});

const AuthContext = () => {
  const [sessionToken, setSessionToken] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);

  function signOut() {}
  function signUp() {}

  return {
    signOut,
    signUp,
    sessionToken,
    setSessionToken,
    isLoading,
    setIsLoading,
  };
};

export default AuthContext;
