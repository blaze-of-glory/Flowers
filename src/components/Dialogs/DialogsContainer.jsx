import React from "react";
import {sendMessageActionCreator, } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        },
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);