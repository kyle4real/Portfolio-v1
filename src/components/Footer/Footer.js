import React from "react";
import SectionLayout from "../../UI/SectionLayout/SectionLayout";
import Logo from "../Logo/Logo";
import { FaGithub } from "react-icons/fa";

import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <SectionLayout className={classes["footer__section-container"]}>
            <div className={classes.footer}>
                <Logo className={classes.footer__logo} />
                <h4 className={classes.footer__tagline}>Designed and Built by Kyle Friel</h4>
                <a
                    href="https://github.com/kyle4real/Portfolio-v1"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.footer__link}
                >
                    <FaGithub />
                </a>
            </div>
        </SectionLayout>
    );
};

export default Footer;
