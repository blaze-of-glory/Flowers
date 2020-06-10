import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userBasicPhoto from  "../../../assets/images/user-basic.png"
import ProfileStatus from "./ProfileStatus";
import Profile from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    if (profile.fullName === 'samurai dimych') {
        profile.fullName = 'Сенсей Дмитрий'
    }

    if (profile.lookingForAJob == true) {
        profile.lookingForAJob = 'Ищу работу!'
    } else if (profile.lookingForAJob == false) {
        profile.lookingForAJob = 'Работаю!'
    }
    if (profile.photos.large === null) {
        profile.photos.large = userBasicPhoto;
    }
    return (
        <div>
            <div><img
                src="https://www.desktopbackground.org/p/2013/02/09/528063_flower-nature-wallpapers-hd-for-desktop-uncalke-com_1920x1080_h.jpg"
                alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large} alt=""/>
                <div className={s.fullName}>
                    {profile.fullName}
                </div>
                <div className={s.aboutMe}>
                    О себе: {profile.aboutMe}
                </div>
                <div className={s.lookingForAJob}>
                    Статус: {profile.lookingForAJob}
                </div>
                <div className={s.lookingForAJobDescription}>
                    Дополнение: {profile.lookingForAJobDescription}
                </div>
                <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;