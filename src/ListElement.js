import React from 'react';

import moreIcon from "./resources/more-icon.svg";
import editIcon from "./resources/edit-icon.svg";
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
                    {/* <input
                        type="image"
                        src={moreIcon}/> */}
                    <input
                        type="image"
                        src={editIcon}/>
                    <input
                        type="image"
                        src={deleteIcon}/>
                </div>
            </div>
        );
    }
}

export default ListElement;