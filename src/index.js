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
        this.handleDeleteListIten = this.handleDeleteListIten.bind(this);
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

    handleDeleteListIten(iten){
        let newList = this.state.listItens.slice();

        for (let i = 0; i < newList.length; i++){
            if (newList[i] === iten){
                newList.splice(i, 1);
            }
        }

        this.setState({
            listItens: newList
        });
    }

    render(){
        return (
            <Suspense fallback={<Loading/>}>

                <div className="todo-list">
                    <h1>To - do List</h1>

                    <InputListElement
                        onSubmit={this.handleAddListIten}/>
                    <List
                        itens={this.state.listItens}
                        onDeleteIten={this.handleDeleteListIten}/>
                </div>
            </Suspense>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));