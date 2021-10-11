import { combineReducers } from "redux";

const initialState = {
  savedGames: []
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE": return {...state, savedGames: state.savedGames.concat([action.payload])}
    case "DISLIKE": return {...state, savedGames: state.savedGames.filter(item=> item.id !== action.payload.id )}
    default: return state;
  }
};

function checkReducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE": return Object.assign({}, state, {
      like: action.payload.like = true
    });
    case "DISLIKE": return Object.assign({}, state, {
      like: action.payload.like = false
    });
    default: return state;
  }
};

const rootReducer = combineReducers({
  savedGames: gameReducer,
  checkReducer: checkReducer,
});

export default rootReducer;