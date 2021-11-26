import React from 'react';
import Loader from '../common/Loader';
import Pagintor from './Paginator';
import UserItem from './UserItem';

const User = (props) => {
    let users = props.users.map(item => {
        
        return <UserItem 
                id={item.id}
                name={item.name}
                photos={item.photos}
                status={item.status}
                followed={item.followed}
                onUnfollow={props.onUnfollow}
                onFollow={props.onFollow}
                togleFetcgFollow={props.togleFetcgFollow}
        />
    })
    return <>
    {props.isFetch?<Loader/>: <>

        {<Pagintor
            totalCount={props.totalCount}
            pageSize={props.pageSize}
            changePage={props.changePage}
            currentPage={props.currentPage}
        />}
        {users}
    </>}
    </> 
}

export default User;