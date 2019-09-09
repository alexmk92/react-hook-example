import React, { useContext } from 'react';
import EntryContext from "../state/EntryContext";
import { entryTypes } from "../reducers/entryReducer";

export const Entry = ({ id, dob, createdAt, name }) => {
    const { state, dispatch } = useContext(EntryContext);

    const isActiveClass = (state.selected && state.selected.id === id) ? 'bg-white' : '';

    return (
        <div
            className={`flex flex-row justify-between py-3 px-4 border-b border-gray-500 ${isActiveClass}`} key={id}
            onClick={ () => dispatch({ type: entryTypes.SELECT, payload: { id } })}
        >
            <span>{ name } <span className='text-gray-500 font-light italic'>({ dob })</span></span>
            <button
                className='bg-red-600 px-5 py-2 text-white float-right text-sm'
                onClick={ () => dispatch({ type: entryTypes.DELETE, payload: { id } }) }>
                Delete
            </button>
        </div>
    );
};
