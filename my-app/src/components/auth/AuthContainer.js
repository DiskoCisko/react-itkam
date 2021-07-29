import Login from './Auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        login : state.auth.login
    }
}
export default connect(mapStateToProps, {})(Login)