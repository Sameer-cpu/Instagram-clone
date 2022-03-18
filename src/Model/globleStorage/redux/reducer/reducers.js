import {USER_INITIAL_DATA} from '../actions/types'
initialState = {

};

export const InitialUserData = (state = initialState, action) => {
  switch (action.type) {
    case USER_INITIAL_DATA: 
      // const userData = {...state};
      const  userData = action.payload;
      return userData;
    
    default:
      return state;
  }
};
