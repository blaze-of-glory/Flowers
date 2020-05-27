import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW-POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, i am Lotus!', likeCounts: 15 + ' ' + '\u2665'},
        {id: 2, message: 'Hey, me too)))', likeCounts: 20 + ' ' + '\u2665'}
    ],
    newPostText: 'Flowers.com',
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;

    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text,
});
export const setUserProfile =(profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus =(status) =>({type: SET_STATUS, status});

export const getUserProfile =(userId) =>(dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};
export const getStatus =(userId) =>(dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus =(status) =>(dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    });
};
export default profileReducer;