import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncotrolledAccordion} from "./components/UncontroledAccordion/UncotrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";

function App() {

    return (
        <div className="App">
            <PageTitle title="This is APP Component"/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>



            <UncontrolledRating />

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"User"} collapsed={false}/>*/}

            <UncotrolledAccordion titleValue={"Menu"} />
            <UncotrolledAccordion titleValue={"User"} />

            <OnOff  />
            <OnOff  />
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
