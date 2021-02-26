import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title="This is APP Component"/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsTitle = {
    title: string
}

function PageTitle(props: PageTitlePropsTitle) {
    return <h1>{props.title}</h1>
}


export default App;
