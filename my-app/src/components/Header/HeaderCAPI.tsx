import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../reduxe/auth_reducer';
import Header from './Header.tsx';
import { getLoginSelector } from '../../reduxe/selector';
import { AppStateType } from '../../reduxe/reduxe';

class HeaderCAPI extends React.PureComponent<PropsType> {
  render() {
    
    return (
      <Header login={this.props.login} logoutUser={this.props.logoutUser} />
    );
  }
}

type PropsType = MapStateToPropsType & MapDispatcheToPropsType;

type MapStateToPropsType = {
  login: string;
};

type MapDispatcheToPropsType = {
  logoutUser: () => (dispatch: any) => Promise<void>;
};

type OwnProps = {
};

const mapStateToProps = (state) => {
  return {
    login: getLoginSelector(state),
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatcheToPropsType,
  OwnProps,
  AppStateType
>(mapStateToProps, { logoutUser })(HeaderCAPI);
