import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducer";
import {Container, Grid} from 'semantic-ui-react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Task() {
    const {isForm} = useSelector((state: AppState) => state.task);
    return (
        <Container>
            <Grid>
                <Grid.Column width={isForm ? 10 : 16}>
                    <TaskList/>
                </Grid.Column>
                {isForm && (
                    <Grid.Column width={6}>
                        <TaskForm/>
                    </Grid.Column>
                )}
            </Grid>
        </Container>
    )
}

export default Task
