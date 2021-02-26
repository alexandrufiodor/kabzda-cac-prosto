import React from "react";

export function Accordion(props: any) {
    return <>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </>
}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}