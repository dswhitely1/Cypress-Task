import {Reducer} from "redux";
import {TaskState} from "../task/taskTypes";

type State = TaskState

interface FunctionMap {
    [key: string]: (state: State, payload: any) => void
}

type CreateReducer<S = State, F extends FunctionMap = any> = (state: S, fnMap: F) => Reducer

export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state
};
