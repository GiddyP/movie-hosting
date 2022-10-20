import React from 'react';

const Button = ({ styles, text }) => (
    <button type='button' className={`${styles}`}>
        {text}
    </button>
);

export default Button;