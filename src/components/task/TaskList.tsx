import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducer";
import {Task} from "../../store/task/taskTypes";
import {ActionsContext} from "../../contexts/ActionsContext";
import {Button, Segment} from "semantic-ui-react";
import TaskSection from "./TaskSection";

function TaskList() {
    const actions = useContext(ActionsContext);
    const activeTasks = useSelector((state: AppState) => state.task.task.filter((t: Task) => !t.completed));
    const completedTasks = useSelector((state: AppState) => state.task.task.filter((t: Task) => t.completed));

    function deleteCompleted() {
        actions?.task.deleteCompleted()
    }

    return (
        <>
            <Segment.Group>
                <TaskSection sectionTitle="Active Tasks" tasks={activeTasks}/>
            </Segment.Group>
            <Segment.Group>
                <TaskSection sectionTitle="Completed Tasks" tasks={completedTasks}/>
            </Segment.Group>
            <Button positive content="Clear Completed" onClick={deleteCompleted}/>
        </>
    )
}

export default TaskList;
