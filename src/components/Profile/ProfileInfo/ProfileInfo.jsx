import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userBasicPhoto from  "../../../assets/images/user-basic.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {

    let [editMode,setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    if (profile.fullName === 'samurai dimych') {
        profile.fullName = 'Сенсей Дмитрий'
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =  (formData) => {
       saveProfile(formData).then( () => {
               setEditMode(false);
        });

    }

    return (
        <div>
            <div><img
                src="https://www.desktopbackground.org/p/2013/02/09/528063_flower-nature-wallpapers-hd-for-desktop-uncalke-com_1920x1080_h.jpg"
                alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || userBasicPhoto} alt="avatar"/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={s.avatarLoader} />}

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/> }
                <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const Contact = ({contactTitle,contactValue}) => {
    return <div><b>{contactTitle}</b>:<b>{contactValue}</b></div>
}

const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return (
        <div>
            { isOwner && <div><button onClick={goToEditMode}>edit</button></div> }
            <div className={s.fullName}>
                {profile.fullName}
            </div>
            <div className={s.aboutMe}>
                О себе: {profile.aboutMe}
            </div>
            <div className={s.lookingForAJob}>
                Ищу работу: {profile.lookingForAJob ? <span>&#10003;</span> : <span>&#10007;</span>}
            </div>
            { profile.lookingForAJob &&
            <div className={s.lookingForAJobDescription}>
                Мои профессиональные навыки : {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}



export default ProfileInfo;