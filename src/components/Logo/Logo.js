import React from "react";

import classes from "./Logo.module.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Logo = ({ className }) => {
    return (
        <AnchorLink className={`${classes.logo} ${className}`} href="#hero">
            Kyle Friel
        </AnchorLink>
    );
};

export default Logo;
