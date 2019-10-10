import React, { Suspense } from 'react';
import Loading from "./Loading";
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
            <div>
                <p>{this.state.value}</p>
                <img src={editIcon}/>
                <img src={deleteIcon}/>
            </div>
        );
    }
}

export default ListElement;