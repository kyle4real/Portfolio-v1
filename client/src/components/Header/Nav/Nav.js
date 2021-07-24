import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu }) => {
    console.log(isMenu);
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
            </ul>
            <Button className={classes["nav__resume"]}>Resume</Button>
        </nav>
    );
};

export default Nav;
