import React, {useState} from "react";
import s from "./OnOff.module.css";

type OnOffPropsType = {
    // on: boolean
}

export function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        display: 'inline-block',
        cursor: 'pointer',
        width: "30px",
        height: "20px",
        marginLeft: "10px",
        marginBottom: "10px",
        border: "1px solid #000",
        backgroundColor: on ? "green" : "transparent"
    }
    const offStyle = {
        display: 'inline-block',
        cursor: 'pointer',
        width: "30px",
        height: "20px",
        marginLeft: "10px",
        marginBottom: "10px",
        border: "1px solid #000",
        backgroundColor: on ? "transparent" : "red"
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: "10px",
        height: "10px",
        marginLeft: "20px",
        borderRadius: "99px",
        border: "1px solid #000",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true)}}>on</div>
            <div style={offStyle}  onClick={() => {setOn(false)}}>off</div>
           <div style={indicatorStyle}></div>
        </div>
    )
}
