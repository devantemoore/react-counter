import React from 'react';

const ToDo = () => {
    return (
        <div className="container m-4 p-2">
            <h2 className="bg-color-red">To Do List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox"/>Todo Item #1</li>
                <li className="list-group-item p1">Todo Item #2</li>
                <li className="list-group-item p1">Todo Item #3</li>
            </ul>
        </div>
    );
}

export default ToDo;
