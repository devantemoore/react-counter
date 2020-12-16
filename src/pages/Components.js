import React from 'react';
import Counter from '../components/counter/Counter';
import ToDo from '../components/to-do/ToDo';

const Components = () => {
    return (
        <div className="container bg-warning p-5">
            <Counter/>
            <ToDo/>
        </div>
    );
}

export default Components;
