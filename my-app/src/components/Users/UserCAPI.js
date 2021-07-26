import React from 'react';
import * as axios from 'axios';
import User from './User';
import { connect } from 'react-redux';
import {userAPI} from './../../DAL/api'
import {onFollow,
    onUnfollow,
    setUsers,
    changePage,
    changeTotalCountPage,
    onFetch,
    fetchingFollow,
} from '../../reduxe/actions'


const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isFetch: state.userPage.isFetch,
        isFetchFollow: state.userPage.isFetchFollow,
        togleFetcgFollow: state.userPage.togleFetcgFollow
    }
}
class UserCAPI extends React.Component {
    componentDidMount = () => {
        this.props.onFetch()
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.onFetch()
            this.props.changeTotalCountPage(response.totalCount)
            this.props.setUsers(response.items)
        })
    }
    onFollow = (e) => {
        debugger
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${e.target.id}`,{},{
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': '6a995dcb-f758-48c0-a11e-158549677c15'
        //     }
            
        // })
        this.props.fetchingFollow(true, e.target.id)
        userAPI.followUser(e.target.id)
        .then((response)=>{
            
            if(response.data.resultCode === 0) {
                this.props.onFollow(e.target.id)}
                this.props.fetchingFollow(false, e.target.id)    
            }
            )  
    }
    onUnfollow = (e) => {
        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.target.id}`,{
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': '6a995dcb-f758-48c0-a11e-158549677c15'
        //     }
        // })
        this.props.fetchingFollow(true, e.target.id)
        userAPI.unfollowUser(e.target.id)
        .then((response)=>{
            if(response.data.resultCode === 0){
                this.props.onUnfollow(e.target.id)
            }
            this.props.fetchingFollow(false, e.target.id)
            })
        
    }
    changePage = (p) => {
        this.props.changePage(p)
        this.props.onFetch()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
        .then(response => {
            this.props.onFetch()
            this.props.setUsers(response.data.items)
        })
    }
    render() {
       return <User
           totalCount={this.props.totalCount}
           currentPage={this.props.currentPage}
           users={this.props.users}
           pageSize={this.props.pageSize}
           changePage={this.changePage}
           onUnfollow={this.onUnfollow}
           onFollow={this.onFollow}
           isFetch={this.props.isFetch}
           isFetchFollow={this.props.isFetchFollow}
           togleFetcgFollow={this.props.togleFetcgFollow}
       />
    }
}

export default connect(mapStateToProps, {
    onFollow,
    onUnfollow,
    setUsers,
    changePage,
    changeTotalCountPage,
    onFetch,
    fetchingFollow
} )(UserCAPI)