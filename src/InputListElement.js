import React from 'react';

import add from "./resources/add.svg"

import "./stylesheets/InputListElement.css";

class InputListElement extends React.Component {

    render(){

        return (
            <form onSubmit={this.handleSubmit} className="list-element">
                <input
                    className="element-text"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <input
                    type="image"
                    src={add}
                    name="submit"
                    alt="submit"/>
            </form>
        );
    }
}

export default InputListElement;