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

    addListIten(event){
        const iten = event.target.value;

        let newList = this.state.listItens.concat(iten);

        this.setState({
            listItens: newList
        });
    }

    render(){
        return (
            <Suspense fallback={<Loading/>}>
                <InputListElement
                    value={this.state.enteredValue}
                    onSubmit={this.addListIten}/>
                <List
                    itens={this.state.listItens}/>
            </Suspense>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

