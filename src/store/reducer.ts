import {combineReducers} from "redux";
import task from './task/taskReducer';

export const rootReducer = combineReducers({task});

export type AppState = ReturnType<typeof rootReducer>
