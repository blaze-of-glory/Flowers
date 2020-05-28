import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}key={p.id}/>);

    let addPostText = (value) => {
        props.addPost(value.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddPostFormRedux onSubmit={addPostText}/>
            <br/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} placeholder={"Type your post text"} name={"newPostText"}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;