import React from 'react';

import add from "./resources/add.svg"

import "./stylesheets/InputListElement.css";

class InputListElement extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "Add new element"
        };
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.value);

        this.setState({
            value: "Add new element"
        });
    }
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