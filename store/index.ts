// store.ts
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
// import documentsReducer from './slices/documentsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    documents: documentsReducer,
    // Add other slices as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
