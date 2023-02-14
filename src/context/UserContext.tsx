import React, { createContext, ReactNode, useContext, useState } from "react";

export type User = {
  name: string;
  password: string;
}

export interface IUserContext {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>
}

type UserProviderProps = {
  children: ReactNode
}

const defaultState = {
  user: {
    name: "",
    password: "",
  },
  setUser: (user: User) => {}
} as IUserContext

export const UserContext = createContext(defaultState);

export default function UserProvider({children}: UserProviderProps) {
  const [user, setUser] = useState<User>({name: "usuário deslogado", password: ""})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// export function useUser() {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserContextProvider");
//   }
//   return context;
// }