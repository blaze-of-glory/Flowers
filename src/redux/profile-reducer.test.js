import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, i am Lotus!', likeCounts: 15 + ' ' + '\u2665'},
        {id: 2, message: 'Hey, me too)))', likeCounts: 20 + ' ' + '\u2665'}
    ]
};

test('new post should be added', () => {
    // 1.Test data
    let action = addPostActionCreator("YLOO");

    // 2.Action
    let newState = profileReducer(state, action);

    // 3.Expectation
   expect(newState.posts.length).toBe(3);
});

test('after deleting length of messages should decrement', () => {
    // 1.Test data
    let action = deletePost(1);

    // 2.Action
    let newState = profileReducer(state, action);

    // 3.Expectation
    expect(newState.posts.length).toBe(1);
});
