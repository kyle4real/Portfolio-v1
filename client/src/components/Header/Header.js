import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

import classes from "./Header.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const size = useWindowSize();

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size, menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <React.Fragment>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <div className={classes.nav__logo}>
                        <h1>dev4real</h1>
                    </div>
                    <div
                        className={`${classes.nav__links} ${
                            menuOpen && classes["nav__links--display"]
                        }`}
                    >
                        <ul>
                            <li>
                                <a href="#about">About</a>
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
                    <div className={classes.nav__toggler} onClick={handleMenuToggle}>
                        {menuOpen ? <CgClose /> : <CgMenuRight />}
                    </div>
                </nav>
            </header>
            {menuOpen && <Modal />}
        </React.Fragment>
    );
};

export default Header;
