import React from 'react';
import './app.scss';
import CustomHeader from 'components/Header';
import Landing from 'components/Landing';
import Toast from 'components/Toast/Toast';

// import { openAlert } from 'store/alert/alert.actions';

import { connect } from 'react-redux';

const App = ({ alert: { openAlert } }) => {
  return (
    <div>
      <CustomHeader />
      {openAlert && <Toast />}
      <div className="toolbarMargin" />
      <Landing />
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

// const mapDispatchToProps = (dispatch) => ({
//   onSigninStart: (formData, history) =>
//     dispatch(signinStart(formData, history)),
// });

export default connect(mapStateToProps, null)(App);
