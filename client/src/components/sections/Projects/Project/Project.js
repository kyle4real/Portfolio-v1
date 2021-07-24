import React from "react";

import classes from "./Project.module.scss";

const Project = () => {
    return (
        <li className={classes.project}>
            <div className={classes.project__content}></div>
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
