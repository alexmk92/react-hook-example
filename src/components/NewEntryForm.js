import React, { useContext, useRef, useEffect, useState } from 'react';
import EntryContext from '../state/EntryContext';
import {entryTypes} from "../reducers/entryReducer";
import {yearsMonthsDaysHoursSince} from "../lib/time";
import moment from 'moment';

export const NewEntryForm = () => {
    let nameInput = useRef();
    let dateInput = useRef();
    let button;

    const { dispatch, state } = useContext(EntryContext);
    const { selected } = state;

    const [dob, setDob]   = useState(selected ? selected.dob : null);
    const [name, setName] = useState(selected ? selected.name : null);
    const [id, setId]     = useState(selected ? selected.id : null);

    useEffect(() => {
        setId(selected ? selected.id : null);
        setDob(selected ? selected.dob : null);
        setName(selected ? selected.name : null);

        if (!selected && nameInput && dateInput) {
            nameInput.focus();
            nameInput.current.value = null;
            dateInput.current.value = null;
        }
    }, [selected]);

    if (id) {
        button = <button className='bg-green-500 px-5 py-2 text-white' onClick={() => dispatch({ type: entryTypes.UPDATE, payload: { id, name, dob } })}>Update</button>
    } else {
        button = <button className='bg-green-500 px-5 py-2 text-white' onClick={() => dispatch({ type: entryTypes.CREATE, payload: { name, dob } })}>Save</button>
    }

    return (
        <div className='p-6 px-8 bg-white'>
            <input ref={nameInput} value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 border border-grey-800 my-3' type='text' placeholder='Name...' />
            <input ref={dateInput} value={dob} onChange={(e) => setDob(e.target.value)} className='w-full p-2 border border-grey-800 my-3' type='date' />
            <div className='float-right'>
                { id ? <button className='bg-blue-500 px-5 py-2 text-white mx-2' onClick={() => dispatch({ type: entryTypes.NEW })}>New</button> : null }
                { button }
            </div>
            { currentAge({ dob })}
        </div>
    );
};

const currentAge = ({ dob }) => {
    const { years, months, days, hours } = yearsMonthsDaysHoursSince(moment(dob), moment());
    return <span className={!dob ? 'invisible' : ''}>{ years } years, { months } months, { days } days and { hours } hours old.</span>
};
