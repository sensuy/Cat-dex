

export type AuthContextType = {
  name: string,
  role: string,
  isLoggedIn: boolean,
  login: () => void;
  logout: () => void;
};