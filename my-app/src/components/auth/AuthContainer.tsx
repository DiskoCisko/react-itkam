import { connect } from 'react-redux';
import Login from './Login.tsx';
import { loginUser } from '../../reduxe/auth_reducer';
import { AppStateType } from '../../reduxe/reduxe';
import { authBodyType } from '../../DAL/api';

export type PropsType = MapStateToPropsType & MapDispatcheToPropsType;

type MapStateToPropsType = {
  login: string;
  error: string;
  captcha: string | boolean;
};

type MapDispatcheToPropsType = {
  loginUser: (body: authBodyType) => (dispatch: any) => Promise<void>;
};

type OwnProps = {}

const mapStateToProps = (state: AppStateType) => {
  return {
    login: state.auth.login,
    error: state.auth.error,
    captcha: state.auth.captcha,
  };
};
export default connect<
  MapStateToPropsType,
  MapDispatcheToPropsType,
  OwnProps,
  AppStateType
>(mapStateToProps, { loginUser })(Login);
