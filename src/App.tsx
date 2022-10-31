import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log("App rendering")
    return (
        <div>
            <input/>
            <input type={"date"}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            <div>Article 1</div>
            <Rating value={3}/>
            <Accordion title={"menu"}/>
            <Accordion title={"Users"}/>
            <div>Article 2</div>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
