import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return (
        <form onSubmit={handleSubmit}>
          <div><button>save</button></div>
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div className={s.fullName}>
                Имя: {createField("Full name","fullName",Input,[])}
            </div>
            <div className={s.aboutMe}>
                О себе:
                {createField("О себе","aboutMe",Textarea,[])}
            </div>
            <div className={s.lookingForAJob}>
                Ищу работу: {createField("","lookingForAJob",Input,[],{type:"checkbox"})}
            </div>

            <div className={s.lookingForAJobDescription}>
                Мои профессиональные навыки :{createField("Мои профессиональные навыки:","lookingForAJobDescription",Textarea,[])}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key,"contacts." + key,Input,[])}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;