import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}><img className={s.ava} src={props.avatar} alt="ava"/><NavLink to={"/dialogs/" + props.id}
                                                            activeClassName={s.active}>{props.name}</NavLink></div>
    )
}


export default DialogItem;