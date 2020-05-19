import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Sidebar = (props) => {
    let friendsBar = props.bestFriends.bestFriends.map( sid => <DialogItem name={sid.name} id={sid.id} avatar={sid.avatar} key={sid.id}/>);
    return (
        <div className={s.item}><NavLink to= "/friends" activeClassName={s.active}>Friends</NavLink>
            <div className='top'>{friendsBar}</div>
        </div>
    )
}



export default Sidebar;