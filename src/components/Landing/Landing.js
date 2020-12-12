import React from 'react';
// import { openAlert } from 'store/alert/alert.actions';

import { Grid, Row, Column } from 'carbon-components-react';

import { connect } from 'react-redux';

const Landing = () => {
  return (
    <Grid fullWidth>
      <Row>
        <Column>
          <div>LANDING</div>
        </Column>
      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

// const mapDispatchToProps = (dispatch) => ({
//   onSigninStart: (formData, history) =>
//     dispatch(signinStart(formData, history)),
// });

export default connect(mapStateToProps, null)(Landing);
