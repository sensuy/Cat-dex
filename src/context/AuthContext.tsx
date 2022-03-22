import { createContext, ReactElement, useReducer } from "react";
import { LOGIN, LOGOUT } from "../store/actions";
import userReducer from "../store/userReducer";
import { AuthContextType } from "../types/auth";
import { User } from "../types/user";


const initialState: User = {
  name: 'Jack',
  role: 'Owner',
  isLoggedIn: true
}

const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = () => {
    dispatch({
      type: LOGIN
    });
  }

  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  }
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
  );

}

export default AuthContext;