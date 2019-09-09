import React, { useContext } from 'react';
import EntryContext from "../state/EntryContext";
import { entryTypes } from "../reducers/entryReducer";
import { getDelta, minutesSince } from "../lib/time";
import moment from 'moment';

export const Entry = ({ id, createdAt, name }) => {
    const { state, dispatch } = useContext(EntryContext);
    const {minutes} = minutesSince(getDelta({ fromDate: moment(createdAt), toDate: moment()}));

    const isActiveClass = (state.selected && state.selected.id === id) ? 'bg-white' : '';

    return (
        <div
            className={`flex flex-row justify-between py-6 px-4 border-b border-gray-500 ${isActiveClass}`} key={id}
            onClick={ () => dispatch({ type: entryTypes.SELECT, payload: { id } })}
        >
            <input type='checkbox' checked />
            <span>{ name } (created {minutes} minutes ago)</span>
            <button
                className='bg-red-600 px-5 py-2 text-white float-right'
                onClick={ () => dispatch({ type: entryTypes.DELETE, payload: { id } }) }>
                Delete
            </button>
        </div>
    );
};
