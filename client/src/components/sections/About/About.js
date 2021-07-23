import React from "react";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";
import SectionLayout from "./../../../UI/SectionLayout/SectionLayout";

import classes from "./About.module.scss";

const About = () => {
    return (
        <SectionLayout className={classes["about__section-container"]} id="about">
            <div className={classes["about__section-BGtop"]} />
            <div className={classes.about}>
                <SectionHeading>About Me</SectionHeading>
                <div className={classes["about__descriptions"]}>
                    <p className={classes["description-txt"]}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quibusdam,
                        molestiae earum pariatur sequi facilis aliquid voluptatibus molestias,
                        necessitatibus temporibus natus adipisci porro accusamus vitae corporis
                        neque culpa? Error, asperiores?
                    </p>
                    <p className={classes["description-txt"]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum
                        quasi obcaecati exercitationem ipsam reprehenderit esse quas, ipsum nobis
                        culpa adipisci odit labore et quae a facilis sunt repellat. Tempora eum
                        totam facere dolorem molestias.
                    </p>
                </div>
            </div>
            <div className={classes["about__section-BGbottom"]} />
        </SectionLayout>
    );
};

export default About;
