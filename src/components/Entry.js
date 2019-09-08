import React, { useContext } from 'react';
import EntryContext from "../state/EntryContext";
import { entryTypes } from "../reducers/entryReducer";

export const Entry = ({ id, createdAt, username }) => {
    const dispatch = useContext(EntryContext);

    return (
        <div className='flex flex-row justify-between' key={id}>
            <input type='checkbox' checked />
            <span>{ username }</span>
            <button onClick={ () => dispatch({ type: entryTypes.DELETE, payload: { id } }) }>
                Delete
            </button>
        </div>
    );
};
