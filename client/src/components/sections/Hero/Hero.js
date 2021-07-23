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
                    I build web applications
                </h2>
            </div>
            <div>
                <p className={classes["description-txt"]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquam soluta
                    dicta quas numquam fugit laboriosam blanditiis dolores rem, repudiandae saepe
                    cumque distinctio maxime tempora provident deserunt perspiciatis magni cum.
                </p>
            </div>
            <div>
                <Button>Send Email</Button>
            </div>
        </SectionLayout>
    );
};

export default Hero;
