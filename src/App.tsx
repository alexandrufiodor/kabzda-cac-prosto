import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
          <PageTitle title="PageTitle"/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"Menu 2"}/>
        </div>
    );
}


function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}



export default App;
