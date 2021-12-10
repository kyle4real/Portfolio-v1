import React from "react";
import Card from "../../../UI/Card/Card";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";
import SectionLayout from "./../../../UI/SectionLayout/SectionLayout";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

import classes from "./About.module.scss";

const technologies = [
    { name: "HTML5", img: <FaHtml5 /> },
    { name: "CSS3", img: <FaCss3Alt /> },
    { name: "JavaScript", img: <SiJavascript /> },
    { name: "ReactJS", img: <FaReact className={classes.react} /> },
    { name: "Node.js", img: <FaNodeJs /> },
    { name: "MongoDB", img: <SiMongodb /> },
];

const About = () => {
    return (
        <div className={classes.bgcontrol}>
            <div className={classes["about__section-BGtop"]} />
            <div className={classes["about__section-BGbottom"]} />
            <SectionLayout className={classes["about__section-container"]} id="about">
                <SectionHeading>About Me</SectionHeading>
                <div className={classes.wrapper}>
                    <div className={classes.about}>
                        <div className={classes["about__descriptions"]}>
                            <p className={classes["description-txt"]}>
                                A few years ago, I started building websites with platforms like
                                Shopify and Wordpress. Overtime, I couldn't help but ponder about
                                the interworkings of the web. Eversince, I've been obsessed with
                                learning new techologies.
                            </p>
                            <p className={classes["description-txt"]}>
                                With a plethora of training, a great number of applications built,
                                and an ineffable amount of hours dedicated; I've become confident in
                                calling myself a software engineer. This industry has changed my
                                life, and I'm excited to see what the future holds.
                            </p>
                        </div>
                    </div>
                    <div className={classes.technologies}>
                        <div className={classes.technologies__header}>
                            <span className={classes.arrow}>&lt;</span>
                            <span className={classes.label__white}>technologies</span>
                            <span className={classes.arrow}>&gt;</span>
                        </div>
                        <div className={classes.technologies__grid}>
                            {technologies.map(({ name, img }, index) => (
                                <Card className={classes.technology__card} key={index}>
                                    <div className={classes.technology__img}>{img && img}</div>
                                    <h2 className={classes.technology__name}>{name}</h2>
                                </Card>
                            ))}
                        </div>
                        <div className={classes.technologies__footer}>
                            <span className={classes.arrow}>&lt;/</span>
                            <span className={classes.label__white}>technologies</span>
                            <span className={classes.arrow}>&gt;</span>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    );
};

// const Technology = styled.div`
//     width: 100%;
// `;

export default About;
