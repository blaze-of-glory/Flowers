import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(addMessageActionCreator(text))
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
        },
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;