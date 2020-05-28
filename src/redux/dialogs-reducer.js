const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState,action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText,
            };
             return {
                ...state,
                messages:[...state.messages,newMessage ]
            };

        default: return state;
    }
};

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;