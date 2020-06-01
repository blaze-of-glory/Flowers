import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(2);


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
                <Field component={Textarea} placeholder={"Type your post text"} name={"newPostText"} validate={[required,maxLength,minLength ]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;