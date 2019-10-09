import React from 'react';
import Box from '@material-ui/core/Box';

class ListElement extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render(){
        return (
            <Box>
                {this.state.value}
            </Box>
        );
    }
}

export default ListElement;