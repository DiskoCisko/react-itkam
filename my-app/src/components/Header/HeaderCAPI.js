import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../../reduxe/auth_reducer.tsx';
import Header from './Header';
import { getLoginSelector } from '../../reduxe/selector';

class HeaderCAPI extends React.PureComponent {
  render() {
    return (
      <Header login={this.props.login} logoutUser={this.props.logoutUser} />
    );
  }
}
HeaderCAPI.defaultProps = {
  login: undefined,
};
HeaderCAPI.propTypes = {
  login: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    login: getLoginSelector(state),
  };
};

export default connect(mapStateToProps, { logoutUser })(HeaderCAPI);
