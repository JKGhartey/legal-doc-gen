import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  currentStep: number;
  formData: Record<string, any>;
}

const initialState: FormState = {
  currentStep: 0,
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { setStep, updateFormData } = formSlice.actions;
export default formSlice.reducer;
