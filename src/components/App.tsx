import * as React from "react"
import styled from "styled-components";
import Header from "./Header/Header";

export const Container = styled.div`
  min-width: 80vw;
  margin: 0 auto;
`


export const App = (props: any) => (
    <>
        <Header />
    </>
)