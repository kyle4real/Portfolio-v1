import React from "react";
import Button from "../../UI/Button/Button";

import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.nav__logo}>
                    <h1>dev4real</h1>
                </div>
                <div className={classes.nav__links}>
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                    </ul>
                    <div>
                        <Button>resume</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
