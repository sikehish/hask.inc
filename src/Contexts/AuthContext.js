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

  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()


  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setIsLoading(false)
    })

    //clean up function
    return unsubscribe
  }, [])

  const value = {
    user,
    login,
    signup,
    logout
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}