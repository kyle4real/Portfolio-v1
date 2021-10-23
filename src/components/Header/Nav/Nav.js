import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Nav.module.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li>
                    <AnchorLink href="#about" onClick={menuToggle}>
                        About
                    </AnchorLink>
                </li>
                <li onClick={menuToggle}>
                    <AnchorLink href="#projects">Projects</AnchorLink>
                </li>
                <li onClick={menuToggle}>
                    <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
                <li onClick={menuToggle}>
                    <AnchorLink href="#blog">Blog</AnchorLink>
                </li>
            </ul>
            <Button className={classes["nav__resume"]}>Resume</Button>
        </nav>
    );
};

export default Nav;
