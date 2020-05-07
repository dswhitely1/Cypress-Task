import React from 'react';
import {Task} from "../../store/task/taskTypes";
import {Segment} from "semantic-ui-react";
import TaskItem from "./TaskItem";

interface IProps {
    sectionTitle: string
    tasks: Task[]
}

function TaskSection({sectionTitle, tasks}: IProps) {
    return (
        <>
            <Segment>{sectionTitle}</Segment>
            <Segment.Group>
                {tasks.map((task, num) => <TaskItem content={task.item} id={task.id} key={task.id} count={num} title={sectionTitle.split(' ')[0]} />)}
            </Segment.Group>
        </>
    )
}

export default TaskSection
