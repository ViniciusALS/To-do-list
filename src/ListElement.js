import React from 'react';
import "./stylesheets/ListElement.css";
import MoreListOptions from "./MoreListOptions";

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

                <MoreListOptions className="element-options"/>
            </div>
        );
    }
}

export default ListElement;