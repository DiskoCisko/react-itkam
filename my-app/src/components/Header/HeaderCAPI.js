import React from 'react';
import { connect } from 'react-redux';
import {logoutUser} from './../../reduxe/actions';
import Header from './Header';
import { getLoginSelector } from './../../reduxe/selector';

class HeaderCAPI extends React.Component {

    render() {
        return <Header
           login={this.props.login}
           logoutUser={this.props.logoutUser}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        login: getLoginSelector(state),
    }
}

export default connect(mapStateToProps, {logoutUser})(HeaderCAPI);