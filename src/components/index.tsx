import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
`

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />,
    </>,
    document.getElementById("root")
);