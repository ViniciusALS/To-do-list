import React from 'react';

import deleteIcon from "./resources/delete-icon.svg";

import "./stylesheets/ListElement.css";

class ListElement extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render(){

        return (
            <div className="list-element">
                <input className="element-text"
                    value={this.state.value}/>

                <div className="element-options">
                    <input
                        type="image"
                        alt="Delete element button"
                </div>
            </div>
        );
    }
}

export default ListElement;