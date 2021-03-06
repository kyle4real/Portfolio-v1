import React from "react";
import Card from "./../../../../UI/Card/Card";
import classes from "./Project.module.scss";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ project }) => {
    console.log(project);
    const { title, img, tech: techArr, demoHref, githubHref, description } = project;
    return (
        <li className={classes.project}>
            <div className={classes.project__content}>
                <h6 className={classes.project__content__pre}>Project Spotlight</h6>
                <h3 className={classes.project__content__title}>
                    <a href={demoHref} target={"_blank"} rel={"noreferrer"}>
                        {title}
                    </a>
                </h3>
                <Card className={classes.project__content__description}>
                    <p>{description}</p>
                </Card>
                <ul className={classes.project__content__tech}>
                    {techArr.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className={classes.project__content__links}>
                    {!!githubHref && (
                        <a href={githubHref} target={"_blank"} rel={"noreferrer"}>
                            <FaGithub />
                        </a>
                    )}
                    <a href={demoHref} target={"_blank"} rel={"noreferrer"}>
                        <BiLinkExternal />
                    </a>
                </div>
            </div>
            <div className={classes.project__image}>
                <a href={demoHref} target={"_blank"} rel={"noreferrer"}>
                    <div className={classes.img__wrap}>
                        <img src={img} alt={`${title} demo display`} />
                    </div>
                </a>
            </div>
        </li>
    );
};

export default Project;
