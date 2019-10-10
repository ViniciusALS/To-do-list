import React from 'react';

import "./stylesheets/InputListElement.css";

class InputListElement extends React.Component {

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

export default InputListElement;