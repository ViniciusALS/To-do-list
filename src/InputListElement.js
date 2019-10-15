import React from 'react';

import add from "./resources/add.svg"

class InputListElement extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ""
        };
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.value);

        this.setState({
            value: ""
        });
    }

    handleChange(event){
        let newValue = event.target.value;

        this.setState({
            value: newValue
        });
    }

    render(){

        return (
            <form onSubmit={this.handleSubmit} className="list-element input-bar">
                <input
                    className="element-text"
                    type="text"
                    placeholder="Add new element"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <input
                    className="element-options"
                    type="image"
                    src={add}
                    name="submit"
                    alt="Add new element button"/>
            </form>
        );
    }
}

export default InputListElement;