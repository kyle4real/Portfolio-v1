import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import useWindowSize from "../../hooks/useWindowSize";

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

    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes["header__logo"]}>
                    <h1>dev4real</h1>
                </div>
                <Nav />
                <div className={classes["header__menu-container"]}>
                    <div className={classes.menu__toggle}>
                        {!menuOpen ? (
                            <CgMenuRight onClick={handleMenuToggle} />
                        ) : (
                            <CgClose onClick={handleMenuToggle} />
                        )}
                    </div>
                    <aside className={`${classes.menu} ${menuOpen && classes["menu-show"]}`}>
                        <Nav isMenu />
                    </aside>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
