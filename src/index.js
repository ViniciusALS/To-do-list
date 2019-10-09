import React from 'react';
import ReactDOM from 'react-dom';
const ListElement = React.lazy(() => import('./ListElement'));

class App extends React.Component {

    render(){
        return (
            <ListElement
                value="test" />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

