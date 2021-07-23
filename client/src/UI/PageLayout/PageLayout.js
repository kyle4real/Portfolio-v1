import React from "react";
import classes from "./PageLayout.module.scss";

const PageLayout = ({ children }) => {
    return <div className={classes["page-layout"]}>{children}</div>;
};

export default PageLayout;
