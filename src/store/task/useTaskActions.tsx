import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {Task, TaskTypes} from "./taskTypes";

export const useTaskActions = () => {
    const dispatch = useDispatch();

    const addTodo = useCallback((task: Task) => {
        dispatch({type: TaskTypes.ADD_TODO, payload: task})
    }, [dispatch]);

    const completeTodo = useCallback((id: number) => {
        dispatch({type: TaskTypes.COMPLETE_TODO, payload: id})
    }, [dispatch]);

    const deleteCompleted = useCallback(() => {
        dispatch({type: TaskTypes.DELETE_TODO})
    }, [dispatch]);

    const toggleForm = useCallback(() => {
        dispatch({type: TaskTypes.TOGGLE_FORM})
    }, [dispatch]);

    return {addTodo, completeTodo, deleteCompleted, toggleForm}
};
