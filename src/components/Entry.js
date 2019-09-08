import React from 'react';

export const Entry = ({ id, createdAt, username }) => {
    return (
        <div key={id}>
            { username }
        </div>
    );
};
