import React, { useContext,createContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
  //returns an object consisitng of all values 
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  const signup = (email, password) =>{
   return  auth.createUserWithEmailAndPassword(email, password)
  } 

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()

  const funcLogIn = () => setIsLogged(true);
  const funcLogOut = () => setIsLogged(false);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setIsLoading(false)
      if(user) console.log(user.uid);
    })

    //clean up function
    return unsubscribe
  }, [])

  const value = {
    isLogged,
    user,
    login,
    signup,
    logout,
    funcLogIn,
    funcLogOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}