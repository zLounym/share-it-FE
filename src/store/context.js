import React from 'react'
import { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react'
import { createAuthStore } from './authStore'
import { createUserStore } from "./usersStore";

const StoreContext = createContext({
  auth: undefined,
  users: undefined
})

export const StoreProvider = ({ children }) => {
  const auth = useLocalStore(createAuthStore)
  const users = useLocalStore(createUserStore)
  return (
    <StoreContext.Provider value={{ users, auth }}>{children}</StoreContext.Provider>
  )
}

export const useAuth = () => useContext(StoreContext).auth
export const useUsers = () => useContext(StoreContext).users
