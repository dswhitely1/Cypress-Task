import React, {useContext} from 'react';
import {useForm} from "../../hooks/useForm";
import {ActionsContext} from "../../contexts/ActionsContext";
import {Button, Form} from 'semantic-ui-react';
import {Task} from "../../store/task/taskTypes";

function TaskForm() {
    const actions = useContext(ActionsContext);
    const [values, handleChange, handleSubmit] = useForm({
        item: '',
        completed: false,
        id: Date.now()
    }, doSubmit);

    function doSubmit() {
        actions?.task.addTodo(values)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Task</label>
                <input placeholder="Task" name="item" value={values.item} onChange={handleChange} id='task_input'/>
            </Form.Field>
            <Button positive type="submit">Submit</Button>
        </Form>
    )
}

export default TaskForm;
