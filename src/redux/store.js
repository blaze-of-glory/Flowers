import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state : {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, i am Lotus!', likeCounts: 15 + ' ' + '\u2665'},
                {id: 2, message: 'Hey, me too)))', likeCounts: 20 + ' ' + '\u2665'}
            ],
            newPostText: 'Flowers.com',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Where your project???'},
                {id: 3, message: 'We are waiting!!!'}
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Yana',
                    avatar: 'https://www.freepngimg.com/thumb/plant/92151-plant-flower-fields-flanders-in-poppy-thumb.png'
                },
                {
                    id: 2,
                    name: 'Bogush',
                    avatar: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Flowers-PNG/Sunflower_PNG_Clip_Art_Image-541842723.png?m=1535756316'
                },
                {id: 3, name: 'Misha', avatar: 'http://gifok.net/images/2015/10/18/Yellow-Lillies_1_043.th.png'},
                {id: 4, name: 'Volodia', avatar: 'https://i.ibb.co/b3TfP5K/hotpng-com.png'},
                {
                    id: 5,
                    name: 'Rostick',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cannabis_leaf.svg/120px-Cannabis_leaf.svg.png'
                }
            ],
            newMessageText: 'Flowers.com',
        },
        sidebar: {
            bestFriends:[
            {
                id: 1,
                name: 'Yana',
                avatar: 'https://www.freepngimg.com/thumb/plant/92151-plant-flower-fields-flanders-in-poppy-thumb.png'
            },
            {
                id: 2,
                name: 'Bogush',
                avatar: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Flowers-PNG/Sunflower_PNG_Clip_Art_Image-541842723.png?m=1535756316'
            },
            {
                id: 3,
                name: 'Misha',
                avatar: 'http://gifok.net/images/2015/10/18/Yellow-Lillies_1_043.th.png'
            }
        ]
    },
    _callSubscriber()  {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state);

        }


};

export default store;
window.store = store;