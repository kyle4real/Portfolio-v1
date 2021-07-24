import React from "react";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";

import classes from "./Projects.module.scss";

const Projects = () => {
    return (
        <React.Fragment>
            {/* <div className={classes.filler}></div> */}
            <SectionLayout className={classes["projects__section-container"]}></SectionLayout>
        </React.Fragment>
    );
};

export default Projects;
