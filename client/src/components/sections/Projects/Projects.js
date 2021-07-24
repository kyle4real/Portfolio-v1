import React from "react";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";

import classes from "./Projects.module.scss";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <SectionLayout className={classes["projects__section-container"]} id="projects">
            <SectionHeading>Projects</SectionHeading>
            <ul className={classes.projects__list}>
                <Project />
                <Project />
            </ul>
        </SectionLayout>
    );
};

export default Projects;
