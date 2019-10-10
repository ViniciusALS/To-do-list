import React from 'react';

import moreIcon from "./resources/more-icon.svg";
import editIcon from "./resources/edit-icon.svg";
import deleteIcon from "./resources/delete-icon.svg";

class MoreListOptions extends React.Component {

    render(){
        return(
            <div>
                <img src={moreIcon}/>
                <img src={editIcon}/>
                <img src={deleteIcon}/>
            </div>
        );
    }
}

export default MoreListOptions;