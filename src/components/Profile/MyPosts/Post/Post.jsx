import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
            <div>
                <div className={s.item}>
                    <img src="https://i.ibb.co/q9DKR2k/hotpng-com-1.png" alt="ava"/>
                    {props.message}
                    <br/>
                    {props.likeCounts}
                    <br/>
                    <span>like</span>
                </div>
                <br/>
            </div>
    )
}

export default Post;