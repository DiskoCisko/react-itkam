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
import {
    getUserSelector,
    getPageSizeSelector,
    getTotalCountSelector,
    getCurrentPageSelector,
    getIsFetchSelector,
    getIsFetchFollowSelector,
    getTogleFetcgFollowSelector
} from './../../reduxe/selector';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetch: getIsFetchSelector(state),
        isFetchFollow: getIsFetchFollowSelector(state),
        togleFetcgFollow: getTogleFetcgFollowSelector(state)
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

export default compose(connect(mapStateToProps, {
    changeTotalCountPage,
    getUser,
    changeUserPage,
    follow,
    unfollow
} ))(UserCAPI)
