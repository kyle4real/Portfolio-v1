import React from "react";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";

import classes from "./Projects.module.scss";
import Project from "./Project/Project";

const Projects = ({ projectsArr }) => {
    return (
        <SectionLayout className={classes["projects__section-container"]} id="projects">
            <SectionHeading>Projects</SectionHeading>
            <ul className={classes.projects__list}>
                {projectsArr.map((projectObj, index) => (
                    <React.Fragment key={index}>
                        <Project project={projectObj} />
                    </React.Fragment>
                ))}
            </ul>
        </SectionLayout>
    );
};

Projects.defaultProps = {
    projectsArr: [
        {
            type: "spotlight",
            title: "Sorting Visualizer",
            img: "https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1650730.jpg&fm=jpg",
            tech: ["React", "Sass"],
            demoHref: "/",
            githubHref: "/",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat dolorem facere tempore inventore velit eligendi ad amet voluptates libero.",
        },
        {
            type: "spotlight",
            title: "Inventory/Event Management",
            img: "https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1650730.jpg&fm=jpg",
            tech: ["React", "Styled-Components", "NodeJs", "Express", "MongoDB"],
            demoHref: "/",
            githubHref: "/",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat dolorem facere tempore inventore velit eligendi ad amet voluptates libero.",
        },
        {
            type: "spotlight",
            title: "Typing Speed Test",
            img: "https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1650730.jpg&fm=jpg",
            tech: ["NextJs", "Styled-Components", "NodeJs", "Express", "MongoDB"],
            demoHref: "/",
            githubHref: "/",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat dolorem facere tempore inventore velit eligendi ad amet voluptates libero.",
        },
        {
            type: "spotlight",
            title: "Ecommerce + Admin Area",
            img: "https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1650730.jpg&fm=jpg",
            tech: ["NextJs", "Styled-Components", "NodeJs", "Express", "MongoDB"],
            demoHref: "/",
            githubHref: "/",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat dolorem facere tempore inventore velit eligendi ad amet voluptates libero.",
        },
    ],
};

export default Projects;
