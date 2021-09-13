import React from "react";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";
import SectionLayout from "../../../UI/SectionLayout/SectionLayout";
import ContactSVG from "../../../images/contact.svg";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";

import classes from "./Contact.module.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const infoData = [
    {
        id: 1,
        type: "email",
        value: "businessfriel@gmail.com",
        icon: <AiOutlineMail className={classes.card__icon} />,
    },
    {
        id: 2,
        type: "phone",
        value: "215-859-6601",
        icon: <AiOutlinePhone className={classes.card__icon} />,
    },
    {
        id: 3,
        type: "location",
        value: "Schwenksville, Pennsylvania (19473)",
        icon: <IoLocationOutline className={classes.card__icon} />,
    },
];

const Contact = () => {
    return (
        <SectionLayout className={classes["contact__section-container"]} id="contact">
            <SectionHeading>Ready To Talk?</SectionHeading>
            <div className={classes.contact}>
                <div className={classes.content}>
                    <h1 className={classes.content__pre}>Lets get in touch.</h1>
                    <p className={classes.content__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita
                        error unde delectus fuga odit, asperiores ipsa eos incidunt hic. Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit. Molestias, laboriosam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <Button className={classes.content__btn}>Send Email</Button>
                </div>
                <div className={classes.contact__img}>
                    <img src={ContactSVG} alt="" />
                </div>
            </div>
            <div className={classes.info}>
                {infoData.map(({ id, type, value, icon }) => (
                    <Card key={id} className={classes.info__card}>
                        <div className={classes.card}>
                            {icon}
                            <div className={classes.card__value}>{value}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionLayout>
    );
};

export default Contact;
