import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}


function Rating() {
    return <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </>
}

function Star() {
    return <div>star</div>
}

function Accordion() {
    return <>
        <AccordionTitle/>
        <AccordionBody/>
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

function AccordionTitle() {
    return <>
        <h3>Menu</h3>
    </>
}

function AccordionBody() {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

export default App;
