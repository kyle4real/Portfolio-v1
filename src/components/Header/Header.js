import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "../Logo/Logo";

import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";

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

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuToggle} />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <React.Fragment>
            <div className={classes["header__container"]}>
                <header className={classes.header}>
                    <div className={classes["header__logo"]}>
                        <Logo />
                    </div>
                    <Nav />
                    <div className={classes["header__menu-container"]}>
                        <div className={classes.menu__toggle}>{menuToggle}</div>
                        <aside className={`${classes.menu} ${menuOpen && classes["menu-show"]}`}>
                            <div className={classes["menu__content"]}>
                                <Nav isMenu menuToggle={handleMenuToggle} />
                            </div>
                        </aside>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
};

export default Header;
