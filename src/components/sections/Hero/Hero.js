import React from "react";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";
import Button from "./../../../UI/Button/Button";

import classes from "./Hero.module.scss";

const Hero = () => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? "morning" : hour > 18 ? "evening" : "afternoon";

    return (
        <SectionLayout className={classes["hero__section-container"]}>
            <div>
                <h1 className={classes["pre-txt"]}>good {timeOfDay}, my name is</h1>
            </div>
            <div>
                <h2 className={classes["large-txt"]}>Kyle Friel</h2>
            </div>
            <div>
                <h2 className={`${classes["large-txt"]} ${classes["large-txt-2"]}`}>
                    I building modern web apps
                </h2>
            </div>
            <div>
                <p className={classes["description-txt"]}>
                    Welcome to my portfolio! It's built from scratch using React and SCSS, though I
                    much rather have used styled-components, but that conversation is for another
                    time! Anyway... hi, I'm a Fullstack engineer who specializes in the MERN stack.
                </p>
            </div>
            <div>
                <Button className={classes.hero__btn}>Send Email</Button>
            </div>
        </SectionLayout>
    );
};

export default Hero;
