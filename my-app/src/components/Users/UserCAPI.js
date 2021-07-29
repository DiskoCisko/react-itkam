import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import {
    changeTotalCountPage,
    getUser,
    changeUserPage,
    follow,
    unfollow
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
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }
    onFollow = (e) => {
        this.props.follow(e.target.id)  
    }
    onUnfollow = (e) => {
        this.props.unfollow(e.target.id)
    }
    changePage = (p) => {
        this.props.changeUserPage(p, this.props.pageSize)
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
    changeTotalCountPage,
    getUser,
    changeUserPage,
    follow,
    unfollow
} )(UserCAPI)