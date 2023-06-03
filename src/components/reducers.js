import { combineReducers } from 'redux';
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_NEW_ITEM,
} from './action-types';

const initialState = {
  newItem: '',
  items: [],
};

function newItemReducer(state = initialState.newItem, action) {
  switch (action.type) {
    case UPDATE_NEW_ITEM:
      return action.payload;
    case ADD_ITEM:
      return '';
    default:
      return state;
  }
}

function itemsReducer(state = initialState.items, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  newItem: newItemReducer,
  items: itemsReducer,
});

export default rootReducer;