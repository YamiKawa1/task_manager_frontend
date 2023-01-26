import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskObject } from '../../interface'

export interface TaskState {
  value: Array<TaskObject>
}

const initialState: TaskState = {
  value: [
    {
        id: 1,
        title: 'hola',
        information: 'in client task',
        task_date: '28/01/2023',
        complexity: 'facil',
        done: true,
        archived: false,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 2,
        title: 'hola 2',
        information: 'in client task 2',
        task_date: '28/01/2023',
        complexity: 'medio',
        done: false,
        archived: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 3,
        title: 'hola 3',
        information: 'in client task 3',
        task_date: '28/01/2023',
        complexity: 'dificil',
        done: false,
        archived: false,
        created_at: new Date(),
        updated_at: new Date()
    }
]
}

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = TaskSlice.actions

export default TaskSlice.reducer

