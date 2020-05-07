import {useTaskActions} from "./task/useTaskActions";

export const useActions = () => {
    const task = useTaskActions();

    return {task}
}
