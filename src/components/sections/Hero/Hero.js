import React from "react";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";
import Button from "./../../../UI/Button/Button";

import classes from "./Hero.module.scss";

const Hero = () => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? "morning" : hour > 18 ? "evening" : "afternoon";

    return (
        <SectionLayout className={classes["hero__section-container"]} id="hero">
            <div>
                <h1 className={classes["pre-txt"]}>good {timeOfDay}, my name is</h1>
            </div>
            <div>
                <h2 className={classes["large-txt"]}>Kyle Friel</h2>
            </div>
            <div>
                <h2 className={`${classes["large-txt"]} ${classes["large-txt-2"]}`}>
                    I build web apps
                </h2>
            </div>
            <div>
                <p className={classes["description-txt"]}>
                    Fullstack software engineer who specialized in the MERN stack, with a preference
                    for the frontend.
                </p>
            </div>
            <div>
                <Button
                    className={classes.hero__btn}
                    onClick={() =>
                        window.open(
                            "https://docs.google.com/document/d/1-LZNo6wcRuh2XUXsANNkEdBvRnPctxDxYKKg2lVaf8k/edit?usp=sharing",
                            "_blank"
                        )
                    }
                >
                    Resume
                </Button>
            </div>
        </SectionLayout>
    );
};

export default Hero;
