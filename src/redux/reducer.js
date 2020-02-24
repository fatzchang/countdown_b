import { combineReducers } from 'redux';
// import { initializeApp } from 'firebase';

const loginReducer = (state = true, action) => {
  switch (action.type) {
    case 'login':
      return true;
    case 'logout':
      return false;
    default:
      return state
  }
}

const reducer = combineReducers({
  isLogin: loginReducer,
});

export default reducer;