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
        <SectionLayout className={classes["contact__section-container"]}>
            <SectionHeading>Ready To Talk?</SectionHeading>
            <div className={classes.contact}>
                <div className={classes.content}>
                    <h1 className={classes.content__pre}>Lets get in touch.</h1>
                    <p className={classes.content__description}>
                        Currently, I am searching for new opportunities. Whether you reach out with
                        a proposition, a question that needs an answer, or even a simple hello,
                        please feel free to do so at any time. I thank you for taking the time to
                        review my portfolio, and I hope to hear from you in the future.
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
                {/* <Card className={classes.info__card}>
                    <div className={classes.card}>
                        <AiOutlineMail className={classes.card__icon} />
                        <div>test</div>
                    </div>
                </Card>
                <Card className={classes.info__card}>
                    <div className={classes.card}>
                        <IoLocationOutline className={classes.card__icon} />
                        <div>test</div>
                    </div>
                </Card>
                <Card className={classes.info__card}>
                    <div className={classes.card}>
                        <AiOutlinePhone className={classes.card__icon} />
                        <div>test</div>
                    </div>
                </Card> */}
            </div>
        </SectionLayout>
    );
};

export default Contact;
