import React from "react";
import { hot, setConfig } from "react-hot-loader";
import TodoList from "./TodoList";
import "./App.css"

setConfig({
    showReactDomPatchNotification: false
});

const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

export default hot(module)(App);
