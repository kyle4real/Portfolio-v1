import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children, className }) => {
    return <button className={`${classes.button} ${className}`}>{children}</button>;
};

export default Button;
