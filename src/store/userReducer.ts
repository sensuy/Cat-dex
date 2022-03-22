import { User } from "types/user";
import { LOGIN, LOGOUT } from "./actions";


const initialState: User = {
  name: 'Jack',
  role: 'Owner',
  isLoggedIn: true
}

interface ActionProps {
  type: string;
}

const userReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default userReducer;



