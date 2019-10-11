import React, { Suspense } from 'react';

import Loading from './Loading';

import "./stylesheets/List.css";

const ListElement = React.lazy(() => import('./ListElement'));

class List extends React.Component {

    renderList(listArray){
        return (listArray.map((element)=>
            <ListElement value={element}/>
        ));
    }

    render(){

        return (
            <Suspense fallback={<Loading/>}>
                {this.renderList(this.props.itens)}
            </Suspense>
        );
    }
}

export default List;