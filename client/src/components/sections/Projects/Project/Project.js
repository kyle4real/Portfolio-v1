import React from "react";
import Card from "./../../../../UI/Card/Card";
import classes from "./Project.module.scss";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Project = () => {
    return (
        <li className={classes.project}>
            <div className={classes.project__content}>
                <h6 className={classes.project__content__pre}>Project Spotlight</h6>
                <h3 className={classes.project__content__title}>
                    <a href="/">Sorting Visualizer</a>
                </h3>
                <Card className={classes.project__content__description}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat
                        dolorem facere tempore inventore velit eligendi ad amet voluptates libero.
                    </p>
                </Card>
                <ul className={classes.project__content__tech}>
                    <li>React</li>
                    <li>Sass</li>
                </ul>
                <div className={classes.project__content__links}>
                    <a href="/">
                        <FaGithub />
                    </a>
                    <a href="/">
                        <BiLinkExternal />
                    </a>
                </div>
            </div>
            <div className={classes.project__image}>
                <a href="/">
                    <div className={classes.img__wrap}>
                        <img
                            src="https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1650730.jpg&fm=jpg"
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </li>
    );
};

export default Project;
