import React from "react";
import Card from "../../../UI/Card/Card";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";
import SectionLayout from "./../../../UI/SectionLayout/SectionLayout";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

import classes from "./About.module.scss";

const technologies = [
    { name: "HTML", img: <FaHtml5 /> },
    { name: "CSS", img: <FaCss3Alt /> },
    { name: "JavaScript", img: <SiJavascript /> },
    { name: "React", img: <FaReact /> },
    { name: "Node.js", img: <FaNodeJs /> },
    { name: "MongoDB", img: <SiMongodb /> },
];

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
            <div className={classes.technologies}>
                <div className={classes.technologies__header}>
                    <span className={classes.arrow}>&lt;</span>
                    technologies
                    <span className={classes.arrow}>&gt;</span>
                </div>
                <div className={classes.technologies__grid}>
                    {technologies.map(({ name, img }) => (
                        <Card>
                            <div className={classes.technology__img}>{img}</div>
                            <h2 className={classes.technology__name}>{name}</h2>
                        </Card>
                    ))}
                </div>
                <div className={classes.technologies__footer}>
                    <span className={classes.arrow}>&lt;/</span>
                    technologies
                    <span className={classes.arrow}>&gt;</span>
                </div>
            </div>
            <div className={classes["about__section-BGbottom"]} />
        </SectionLayout>
    );
};

export default About;
