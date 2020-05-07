import {createReducer} from "../utils/createReducer";
import {TaskState, TaskTypes, Task} from "./taskTypes";

const initialState: TaskState = {
    task: [],
    isForm: false
}

const addTodo = (state: TaskState, payload: Task) => ({...state, task: [...state.task, payload]})
const toggleComplete = (state: TaskState, payload: number) => {
    const updatedTasks: Task[] = state.task.map(t => {
        if (payload === t.id) {
            return {
                ...t,
                completed: !t.completed
            }
        } else {
            return t
        }
    })
    return {...state, task: updatedTasks}
}

const removeCompleted = (state: TaskState) => ({...state, task: state.task.filter(t => !t.completed)})

const toggleForm = (state: TaskState) => ({...state, isForm: !state.isForm})

export default createReducer(initialState, {
    [TaskTypes.ADD_TODO]: addTodo,
    [TaskTypes.COMPLETE_TODO]: toggleComplete,
    [TaskTypes.DELETE_TODO]: removeCompleted,
    [TaskTypes.TOGGLE_FORM]: toggleForm
})
