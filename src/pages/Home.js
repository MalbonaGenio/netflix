import React from "react"
import Jumbotron from "../components/jumbotron"
export default function Home() {
    return(
        <Jumbotron.Container>
            Jumbotron container here
            <Jumbotron.Title>Title</Jumbotron.Title>
        <Jumbotron.SubTitle>SubTitle</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
}