export enum TaskTypes {
    ADD_TODO= "ADD_TODO",
    DELETE_TODO = 'DELETE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    TOGGLE_FORM = 'TOGGLE_FORM',
    INITIAL_LOAD = 'INITIAL_LOAD'
}

export interface Task {
    id: number
    item: string
    completed: boolean
}

export interface TaskState {
    task: Task[]
    isForm: boolean
}
