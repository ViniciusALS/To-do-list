import React from 'react';

import deleteIcon from "./resources/delete-icon.svg";

class ListElement extends React.Component {

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            value: this.props.value
        };
    }

    handleDelete(event){
        event.preventDefault();

        this.props.onDelete(this.state.value);
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
                        src={deleteIcon}
                        onClick={this.handleDelete}/>
                </div>
            </div>
        );
    }
}

export default ListElement;