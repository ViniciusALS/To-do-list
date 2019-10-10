import React, { Suspense } from 'react';

import Loading from './Loading';

import "./stylesheets/List.css";

const ListElement = React.lazy(() => import('./ListElement'));

class List extends React.Component {

    render(){

        return (
            <Suspense fallback={<Loading/>}>
                <ListElement/>
            </Suspense>
        );
    }
}

export default List;