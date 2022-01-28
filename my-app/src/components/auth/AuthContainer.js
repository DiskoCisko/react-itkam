import { connect } from 'react-redux';
import Login from './Login';
import { loginUser } from '../../reduxe/auth_reducer';

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    error: state.auth.error,
    captcha: state.auth.captcha,
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
