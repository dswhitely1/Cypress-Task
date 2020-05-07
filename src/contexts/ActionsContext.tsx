import {createContext} from "react";
import {Task} from "../store/task/taskTypes";

interface Actions {
    task: {
        addTodo: (task: Task) => void
        completeTodo: (id: number) => void
        deleteCompleted: () => void
        toggleForm: () => void
    }
}

export const ActionsContext = createContext<Actions | null>(null);
export const ActionsProvider = ActionsContext.Provider
