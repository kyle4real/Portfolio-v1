import React from "react";

import classes from "./SectionHeading.module.scss";

const SectionHeading = ({ children, className }) => {
    return <h2 className={`${classes["section-heading"]} ${className}`}>{children}</h2>;
};

export default SectionHeading;
