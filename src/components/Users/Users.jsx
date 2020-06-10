import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage,totalUsersCount,pageSize, onPageChanged,users,...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
        {
            users.map(u => <User follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} user={u} key={u.id}/>)
        }
        </div>
    </div>
}

export default Users;