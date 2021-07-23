import React from "react";

import classes from "./SectionLayout.module.scss";

const SectionLayout = ({ children, className, id }) => {
    return (
        <div className={`${classes["section-layout"]} ${className}`} id={id}>
            {children}
        </div>
    );
};

export default SectionLayout;
