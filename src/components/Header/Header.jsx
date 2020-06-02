import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i1.wp.com/honeybrook.cc/wp-content/uploads/2014/09/Close-up-Mode-100.png?w=1080" alt=""/>
            <h1>FLOWER-POWER</h1>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}   <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;