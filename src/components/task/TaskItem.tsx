import React, {useContext} from 'react';
import {Segment} from 'semantic-ui-react'
import {ActionsContext} from "../../contexts/ActionsContext";
interface IProps {
    content: string
    id: number,
    count: number,
    title: string
}
function TaskItem({content, id, count, title}:IProps) {
    const actions = useContext(ActionsContext);

    return (
        <Segment onClick={() => actions?.task.completeTodo(id)} className={title}>
            {content}
        </Segment>
    )
}

export default TaskItem
