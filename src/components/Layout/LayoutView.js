import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import constants from '../../services/constants';

import './LayoutView.css';

const LayoutView = props => {
  return (
    <ConnectedRouter history={props.history}>
      <section>
        <Switch>
          <Route
            exact
            path={constants.BASE_HOST + '/exchange/:symbol'}
            component={props.exchange}
          />
        </Switch>
      </section>
    </ConnectedRouter>
  );
};

export default LayoutView;
