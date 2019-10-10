import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loading from "./Loading";

import "./stylesheets/index.css";

const InputListElement = React.lazy(()=>import("./InputListElement"));
const List = React.lazy(() => import('./List'));

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleAddListIten = this.handleAddListIten.bind(this);
        this.state = {
            listItens: []
        }
    }

    handleAddListIten(iten){
        let newList = this.state.listItens.slice();
        newList.push(iten);

        this.setState({
            listItens: newList
        });
    }

    render(){
        return (
            <Suspense fallback={<Loading/>}>
                <InputListElement
                    onSubmit={this.handleAddListIten}/>
                <List
                    itens={this.state.listItens}/>
            </Suspense>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

