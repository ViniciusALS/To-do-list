import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const ListElement = React.lazy(() => import('./ListElement'));

class App extends React.Component {

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

