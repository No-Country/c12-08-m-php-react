import { Item } from '@/types/types';
import { useReducer } from 'react';

enum ItemsActionKind {
  add = 'add',
  delete = 'delete',
}

interface UserAction {
  type: ItemsActionKind;
  payload: Item;
}

const itemsReducer = (state: Item[], action: UserAction) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useItems = () => {
  const INITIAL_ITEMS: Item[] = [];

  const [items, dispatch] = useReducer(itemsReducer, INITIAL_ITEMS);

  const addItem = (i: Item) => {
    dispatch({ type: ItemsActionKind.add, payload: i });
  };

  return { items, addItem };
};

export default useItems;
