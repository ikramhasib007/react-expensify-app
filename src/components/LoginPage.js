import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => {
  const styledSheet = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#535c68',
    zIndex: '99'
  };
  const loginBtn = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'fixed',
    zIndex: '10000',
    width: '200px'
  }
  return (
    <div style={styledSheet}>
      <button
        style={loginBtn}
        onClick={startLogin}
        className="btn btn-outline-secondary text-dark font-weight-bold btn-lg">Login</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

// const {google, facebook} = startLogin();