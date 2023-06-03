import { ADD_ITEM, DELETE_ITEM, UPDATE_NEW_ITEM } from './action-types';

export const addItem = (newItem) => ({
  type: ADD_ITEM,
  payload: newItem,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const updateNewItem = (newItem) => ({
  type: UPDATE_NEW_ITEM,
  payload: newItem,
});