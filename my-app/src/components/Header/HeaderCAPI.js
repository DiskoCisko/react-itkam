import React from 'react';
import { connect } from 'react-redux';
import {setAuth} from './../../reduxe/actions';
import Header from './Header';
import axios from 'axios';

class HeaderCAPI extends React.Component {
    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
        .then((response)=>{
            let {id, login, email} = response.data.data;
            this.props.setAuth({id,login,email})
            
        })
    }
    render() {
        debugger
        return <Header
           setAuth ={this.props.setAuth}
           login={this.props.login}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderCAPI);