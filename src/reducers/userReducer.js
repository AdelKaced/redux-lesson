import { ADD_USER_LIKE, GET_USERS } from '../actions/user.action';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USER_LIKE:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, likes: action.payload.likes };
        } else {
          return user;
        }
      });
      // return [action.payload];
    default:
      return state;
  }
}
