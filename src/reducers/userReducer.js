import { ADD_HABIT, FETCH_HABITS, FETCH_ATTEMPTS } from '../actions/habitActions';

const initialState = {
  habits: [],
  attempts: []
};

export default function userReducer(state = initialState, action) {
  console.log('action payload', action.payload);
  switch(action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] };
    case FETCH_HABITS:
      return { ...state, habits: action.payload };
    case FETCH_ATTEMPTS:
      return { ...state, attempts: action.payload };
    default:
      return state;
  }
}