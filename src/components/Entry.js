import React from 'react';

export const Entry = ({ id, createdAt, username }) => {
    return (
        <div className='flex flex-row justify-between' key={id}>
            <input type='checkbox' checked />
            <span>{ username }</span>
            <button>Delete</button>
        </div>
    );
};
