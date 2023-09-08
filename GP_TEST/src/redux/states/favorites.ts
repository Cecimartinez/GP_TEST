import { LocalStorageTypes } from "@/models/localStorage";
import { Person } from "@/models/people";
import { getLocalStore, setLocalStore } from "@/utilities";
import {createSlice, current} from "@reduxjs/toolkit";

const initialState: Person[] =[]

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStore(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStore(LocalStorageTypes.FAVORITES) as string) : initialState,
  reducers  : {
    addFavorite: (state, action) => {
      setLocalStore(LocalStorageTypes.FAVORITES, state)
      return action.payload
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter((p: Person) => p.id !== action.payload.id);
      setLocalStore(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    }
  } 
});

export const {addFavorite, removeFavorite } = favoritesSlice.actions;