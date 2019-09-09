import React, { useContext, useRef, useState } from 'react';
import EntryContext from '../state/EntryContext';
import {entryTypes} from "../reducers/entryReducer";
import {yearsMonthsHoursSince} from "../lib/time";
import moment from 'moment';

const currentAge = ({ dob }) => {
    const { years, months, hours } = yearsMonthsHoursSince(moment(dob), moment());
    return <span>You are { years } years, { months } months and { hours } hours old.</span>
};

export const NewEntryForm = () => {
    let nameInput = useRef();
    let dateInput = useRef();

    const { dispatch, state } = useContext(EntryContext);
    const [localState, setLocalState] = useState({ name: '' });

    return (
        <div className='p-6 px-8 bg-white'>
            <input ref={nameInput} onChange={(e) => setLocalState({ ...localState, name: e.target.value })} className='w-full p-2 border border-grey-800 my-3' type='text' placeholder='Name...' />
            <input ref={dateInput} onChange={(e) => setLocalState({ ...localState, dob: e.target.value })} className='w-full p-2 border border-grey-800 my-3' type='date' />
            <button className='bg-green-500 px-5 py-2 text-white float-right' onClick={() => dispatch({ type: entryTypes.CREATE, payload: { name: localState.name, dob: localState.dob } })}>Create</button>
            { currentAge({ dob: localState.dob })}
        </div>
    );
};
