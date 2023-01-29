import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskObject } from '../../interface'
import { getItem } from '../../Helpers/localstorage'

export interface TaskState {
  value: Array<TaskObject>
}

const initialState: TaskState = {
  value: getItem('tasks') || [
    {
        id: '1',
        title: 'hola',
        information: 'in client task',
        task_date: '2023-01-28',
        complexity: 'facil',
        done: true,
        archived: false,
    },
    {
        id: '2',
        title: 'hola 2',
        information: 'in client task 2',
        task_date: '2023-01-28',
        complexity: 'medio',
        done: false,
        archived: true,
    },
    {
        id: '3',
        title: 'hola 3',
        information: 'in client task 3',
        task_date: '2023-01-28',
        complexity: 'dificil',
        done: false,
        archived: false,
    }
]
}

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskObject>) => {
      state.value.push(action.payload);
    },

    restoreTask: (state, action: PayloadAction<string>)=> {
      let task = state.value.find(x => x.id === action.payload)
      if (task) {
        state.value[state.value.indexOf(task)].archived = false;
      }
    },

    archiveTask: (state, action: PayloadAction<string>)=> {
      let task = state.value.find(x => x.id === action.payload)
      if (task) {
        state.value[state.value.indexOf(task)].archived = true;
      }
    },

    doneTask: (state, action: PayloadAction<string>)=> {
      let task = state.value.find(x => x.id === action.payload)
      if (task) {
        state.value[state.value.indexOf(task)].done = true;
      }
    },

    undoneTask: (state, action: PayloadAction<string>)=> {
      let task = state.value.find(x => x.id === action.payload)
      if (task) {
        state.value[state.value.indexOf(task)].done = false;
      }
    },

    deleteTask: (state, action: PayloadAction<string>)=> {      
      let task = state.value.find(x => x.id === action.payload)
      if (task) {
        state.value.splice(state.value.indexOf(task), 1);
      }
    },

    editTask: (state, action: PayloadAction<TaskObject>)=> {
      let task = state.value.find(x => x.id === action.payload.id)
      if (task) {
        let taskObject = state.value[state.value.indexOf(task)]
        taskObject.title = action.payload.title;
        taskObject.information = action.payload.information;
        taskObject.complexity = action.payload.complexity;
        taskObject.task_date = action.payload.task_date;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, restoreTask, undoneTask, doneTask, archiveTask, editTask} = TaskSlice.actions

export default TaskSlice.reducer

