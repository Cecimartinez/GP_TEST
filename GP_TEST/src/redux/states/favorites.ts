import { LocalStorageTypes } from "@/models/localStorage";
import { Person } from "@/models/people";
import { getLocalStore, setLocalStore } from "@/utilities";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Person[] =[]

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStore(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStore(LocalStorageTypes.FAVORITES) as string) : initialState,
  reducers : {
    addFavorite: (state, action) => {
      setLocalStore(LocalStorageTypes.FAVORITES, state)
      return action.payload
    }
  } 
});

export const {addFavorite} = favoritesSlice.actions;