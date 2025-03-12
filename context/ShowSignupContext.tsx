import { createContext, ReactNode, useContext, useState } from "react";

interface SignupContextType {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowSignupContext = createContext<SignupContextType | undefined>(
  undefined
);

export const ShowSignupProvider = ({ children }: { children: ReactNode }) => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <ShowSignupContext.Provider value={{ showSignup, setShowSignup }}>
      {children}
    </ShowSignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(ShowSignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};
