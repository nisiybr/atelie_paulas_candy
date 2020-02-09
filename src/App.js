import CodePush from 'react-native-code-push';

import React, {Component} from 'react';

import Routes from './routes';

// import { Container } from './styles';

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
