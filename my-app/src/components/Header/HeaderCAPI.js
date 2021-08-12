import React from 'react';
import { connect } from 'react-redux';
import {authUser, logoutUser} from './../../reduxe/actions';
import Header from './Header';

class HeaderCAPI extends React.Component {
    componentDidMount = () => {
        this.props.authUser()
    }
    render() {
        debugger
        return <Header
           setAuth ={this.props.setAuth}
           login={this.props.login}
           logoutUser={this.props.logoutUser}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {authUser, logoutUser})(HeaderCAPI);