import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li>
                    <a href="#about" onClick={menuToggle}>
                        About
                    </a>
                </li>
                <li onClick={menuToggle}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={menuToggle}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={menuToggle}>
                    <a href="#blog">Blog</a>
                </li>
            </ul>
            <Button className={classes["nav__resume"]}>Resume</Button>
        </nav>
    );
};

export default Nav;
