import React, { useContext } from 'react';
import EntryContext from "../state/EntryContext";
import { entryTypes } from "../reducers/entryReducer";

export const Entry = ({ id, createdAt, username }) => {
    const { state, dispatch } = useContext(EntryContext);

    const isActiveClass = (state.selected && state.selected.id === id) ? 'bg-white' : '';

    return (
        <div
            className={`flex flex-row justify-between py-6 px-4 border-b border-gray-500 ${isActiveClass}`} key={id}
            onClick={ () => dispatch({ type: entryTypes.SELECT, payload: { id } })}
        >
            <input type='checkbox' checked />
            <span>{ username }</span>
            <button
                className='bg-red-600 px-5 py-2 text-white float-right'
                onClick={ () => dispatch({ type: entryTypes.DELETE, payload: { id } }) }>
                Delete
            </button>
        </div>
    );
};
