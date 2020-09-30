import React from "react";
import { hot, setConfig } from "react-hot-loader";
import TodoList from "./TodoList";
// import "./App.css"
import styled from "styled-components";

/**
 * Styled-Component
 */
const AppContainer = styled.div.attrs({
    className: "App",
})`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

setConfig({
    showReactDomPatchNotification: false
});

const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default hot(module)(App);
