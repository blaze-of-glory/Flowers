import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";



let mapStateToProps = (state) => {
    return {
        bestFriends: state.sidebar
    }
};

 const SidebarContainer = connect(mapStateToProps)(Sidebar);

 export default SidebarContainer;