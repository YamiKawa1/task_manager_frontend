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
    show: false,
    showInfo: false
  }
}

export const GlobalSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.id = action.payload;
      } else {
        state.value.id = '';
      }
    },

    setTitle: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.value.title = action.payload;
      } else {
        state.value.title = '';
      }
    },

    setInfo: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.value.info = action.payload;
      } else {
        state.value.info = '';
      }
    },

    setDate: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.value.date = action.payload;
      } else {
        state.value.date = '';
      }
    },

    setComplexity: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.value.complexity = action.payload;
      } else {
        state.value.complexity = '';
      }
    },

    setEdit: (state, action: PayloadAction<boolean>) => {
      state.value.edit = action.payload;
    },

    setShow: (state, action: PayloadAction<boolean>) => {
      state.value.show = action.payload;
    },

    setShowInfo: (state, action: PayloadAction<boolean>) => {
      state.value.showInfo = action.payload;
    },
    },
})

// Action creators are generated for each case reducer function
export const { setId, setTitle, setInfo, setDate, setComplexity, setEdit, setShow, setShowInfo } = GlobalSlice.actions

export default GlobalSlice.reducer