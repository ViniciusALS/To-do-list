import React, { Suspense } from 'react';
import Loading from "./Loading";
import "./stylesheets/ListElement.css";

const MoreListOptions = React.lazy(()=>import("./MoreListOptions"));

class ListElement extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render(){

        return (
            <Suspense fallback={<Loading/>}>
                <div className="list-element">
                    <input className="element-text"
                        value={this.state.value}/>

                    <MoreListOptions className="element-options"/>
                </div>
            </Suspense>
        );
    }
}

export default ListElement;