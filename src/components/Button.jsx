import React from "react";
import "./styles.css";

function Button(props){
    return (
        <button id="Button" className="rounded-3xl">{props.name}</button>
    );
}

export default Button;