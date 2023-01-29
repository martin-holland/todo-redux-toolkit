import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/counter/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
