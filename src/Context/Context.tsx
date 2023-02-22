import { createContext, ReactNode, useState } from "react";

interface CycleContextType {
  validationRoute: boolean;
  setValidationRoute: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext({} as CycleContextType);

interface Props {
  children?: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [validationRoute, setValidationRoute] = useState(false);

  return (
    <Context.Provider
      value={{
        validationRoute,
        setValidationRoute,
      }}
    >
      {children}
    </Context.Provider>
  );
}
