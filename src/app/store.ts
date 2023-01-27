import { configureStore } from '@reduxjs/toolkit'
import GlobalSlice from '../features/tasks/GlobalSlice'
import TaskSlice from '../features/tasks/TaskSlice'

export const store = configureStore({
    reducer: {
        tasks: TaskSlice,
        global: GlobalSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch