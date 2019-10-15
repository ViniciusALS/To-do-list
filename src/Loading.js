import React from 'react';

class Loading extends React.Component {

    render(){
        return(
            <div className="list-element">
                <div className="element-text">
                    <div className="loading">Loading...</div>
                </div>
            </div>
        );
    }
}

export default Loading;