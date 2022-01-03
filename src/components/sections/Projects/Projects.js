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
            title: "Ecom / Admin CMS",
            img: "https://res.cloudinary.com/dvvqcr28s/image/upload/v1641171766/Portfolio/fullstack-ecom.png",
            tech: ["React", "Styled-Components", "NodeJs", "MongoDB", "Cloudinary", "Stripe"],
            demoHref: "https://astrovinylart-v2.xyz/",
            githubHref: "https://github.com/kyle4real/fullstack-ecom",
            description:
                "An ecommerce site with cart and checkout. User authentication. Admin CMS for creating, updating, and deleting products, variants, media, and collections.",
        },
        {
            type: "spotlight",
            title: "Inventory & Event Management",
            img: "https://res.cloudinary.com/dvvqcr28s/image/upload/v1641181054/Portfolio/logistics-app.png",
            tech: ["React", "Styled-Components", "NodeJs", "MongoDB", "Shopfiy API"],
            demoHref: "https://youtu.be/_krw0qCeCfI",
            githubHref: null,
            description:
                "Logistics App for managing inventory, scheduling sales events, and tracking sales. Demo video available but github repo will remain private.",
        },
        {
            type: "spotlight",
            title: "Sorting Visualization",
            img: "https://res.cloudinary.com/dvvqcr28s/image/upload/v1641177458/Portfolio/sorting-visualization.png",
            tech: ["React", "SCSS"],
            demoHref: "https://sorting-visualization-kf.netlify.app/",
            githubHref: "https://github.com/kyle4real/Sorting-Visualizer",
            description:
                "A sorting visualization app that lets users choose a sorting algorithm and the data-set size and structure. Includes a mode for comparing sorts.",
        },
    ],
};

export default Projects;
