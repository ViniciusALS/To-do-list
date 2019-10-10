import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loading from "./Loading";

import "./stylesheets/index.css";

const InputListElement = React.lazy(()=>import("./InputListElement"));
const List = React.lazy(() => import('./List'));

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            enteredValue: "Add new element",
            listItens: []
        }
    }

    render(){
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ListElement
                    value="test" />
            </Suspense>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

