import { LocalStorageTypes } from "@/models/localStorage";
import { Person } from "@/models/people";
import { getLocalStore, setLocalStore } from "@/utilities";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Person[] =[]

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStore(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStore(LocalStorageTypes.PEOPLE) as string) : initialState,
  reducers : {
    addPeople: (state, action) => {
      setLocalStore(LocalStorageTypes.PEOPLE, state)
      return action.payload;
    }
  } 
});

export const {addPeople} = peopleSlice.actions;