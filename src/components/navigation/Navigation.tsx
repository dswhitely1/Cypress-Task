import React, {useContext} from 'react';
import {Menu, Container, Button} from "semantic-ui-react";
import {ActionsContext} from "../../contexts/ActionsContext";
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducer";

function Navigation() {
    const actions = useContext(ActionsContext)
    const {isForm} = useSelector((state: AppState) => state.task)

    const toggleForm = () => {
        actions?.task.toggleForm()
    };

    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>{`Don's Task Application`}</Menu.Item>
                <Button id="nav-button" positive inverted content={isForm ? 'Close': 'New Task'} onClick={toggleForm} />
            </Container>
        </Menu>
    )
}

export default Navigation
