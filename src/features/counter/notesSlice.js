import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: ['First Task - Wash the dishes, will always be here']
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes]
    },
  },
});

export const { addNote } = notesSlice.actions;

export const selectNotes = (state) => state.notes.notes;


export default notesSlice.reducer;
