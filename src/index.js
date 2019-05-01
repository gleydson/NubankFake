import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Routes />
  </Fragment>
);

export default App;
