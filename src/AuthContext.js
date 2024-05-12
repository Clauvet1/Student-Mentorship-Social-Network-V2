import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase.config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);