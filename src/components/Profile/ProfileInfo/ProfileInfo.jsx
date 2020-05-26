import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userBasicPhoto from  "../../../assets/images/user-basic.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    if (props.profile.fullName === 'samurai dimych') {
        props.profile.fullName = 'Сенсей Дмитрий'
    }

    if (props.profile.lookingForAJob == true) {
        props.profile.lookingForAJob = 'Ищу работу!'
    } else if (props.profile.lookingForAJob == false) {
        props.profile.lookingForAJob = 'Работаю!'
    }
    if (props.profile.photos.large === null) {
        props.profile.photos.large = userBasicPhoto;
    }
    return (
        <div>
            <div><img
                src="https://www.desktopbackground.org/p/2013/02/09/528063_flower-nature-wallpapers-hd-for-desktop-uncalke-com_1920x1080_h.jpg"
                alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt=""/>
                <div className={s.fullName}>
                    {props.profile.fullName}
                </div>
                <div className={s.aboutMe}>
                    О себе: {props.profile.aboutMe}
                </div>
                <div className={s.lookingForAJob}>
                    Статус: {props.profile.lookingForAJob}
                </div>
                <div className={s.lookingForAJobDescription}>
                    Дополнение: {props.profile.lookingForAJobDescription}
                </div>
                <ProfileStatus status={'Hola,Amigos!'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;