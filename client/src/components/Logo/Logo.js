import React from "react";

import classes from "./Logo.module.scss";

const Logo = ({ className }) => {
    return <h1 className={`${classes.logo} ${className}`}>Kyle Friel</h1>;
};

export default Logo;
