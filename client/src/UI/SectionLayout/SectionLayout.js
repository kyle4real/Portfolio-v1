import React from "react";

import classes from "./SectionLayout.module.scss";

const SectionLayout = ({ children, className }) => {
    return <div className={`${classes["section-layout"]} ${className}`}>{children}</div>;
};

export default SectionLayout;
