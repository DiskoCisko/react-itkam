import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Login from './Login';
import {loginUser} from '../../reduxe/actions';
import {FormContainer} from './../common/FormControll/FormController'



export const WithFormReduxe =  reduxForm({
    form: 'loginForm',
  })(FormContainer);

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        error: state.auth.error,
        captcha: state.auth.captcha
    }
}
export default connect(mapStateToProps, {loginUser})(Login)