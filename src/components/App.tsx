import React from 'react';
import {ActionsProvider} from "../contexts/ActionsContext";
import {useActions} from "../store/useActions";
import Navigation from "./navigation/Navigation";
import Task from "./task/Task";

function App() {
    const actions = useActions()

    return (
        <ActionsProvider value={actions}>
            <Navigation/>
            <Task/>
        </ActionsProvider>
    )
}

export default App;
