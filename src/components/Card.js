import React from 'react';

export const Card = ({ id, createdAt, username }) => {
    return (
        <div key={id}>
            { username }
        </div>
    );
};
