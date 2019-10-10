import React from 'react';
import editIcon from "./resources/edit-icon.svg";
import deleteIcon from "./resources/delete-icon.svg";

class ListElement extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render(){

        return (
            <div>
                <p>{this.state.value}</p>
                <img src={editIcon}/>
                <img src={deleteIcon}/>
            </div>
        );
    }
}

export default ListElement;