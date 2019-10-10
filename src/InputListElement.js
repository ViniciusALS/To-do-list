import React from 'react';

import add from "./resources/add.svg"

import "./stylesheets/InputListElement.css";

class InputListElement extends React.Component {

    render(){

        return (
            <div className="list-element">
                <input className="element-text"
                    value={this.props.value}/>
                <img src={add}/>
            </div>
        );
    }
}

export default InputListElement;