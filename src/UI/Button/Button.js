import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children, className, onClick }) => {
    return (
        <button className={`${classes.button} ${className}`} onClick={onClick && onClick}>
            {children}
        </button>
    );
};

export default Button;
