import React from 'react';

export const Button = ({
    name,
    onClick,
    type = "button",
    typeStyle = "",
}) => (
    <button onClick={onClick} className={`button ${typeStyle}`} type={type}>{name}</button>
);
