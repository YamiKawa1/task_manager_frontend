import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GlobalObject } from '../../interface'

export interface GlobalState {
  value: GlobalObject
}

const initialState: GlobalState = {
  value: {
    id: '',
    title: '', 
    info: '',
    date: '',
    complexity: '',
    edit: false,
    show: false
  }
}

export const GlobalSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.value.id = action.payload;
    },

    setTitle: (state, action: PayloadAction<string>) => {
      state.value.title = action.payload;
    },

    setInfo: (state, action: PayloadAction<string>) => {
      state.value.info = action.payload;
    },

    setDate: (state, action: PayloadAction<string>) => {
      state.value.date = action.payload;
    },

    setComplexity: (state, action: PayloadAction<string>) => {
      state.value.complexity = action.payload;
    },

    setEdit: (state, action: PayloadAction<boolean>) => {
      state.value.edit = action.payload;
    },

    setShow: (state, action: PayloadAction<boolean>) => {
      state.value.show = action.payload;
    },
    },
})

// Action creators are generated for each case reducer function
export const { setId, setTitle, setInfo, setDate, setComplexity, setEdit, setShow } = GlobalSlice.actions

export default GlobalSlice.reducer