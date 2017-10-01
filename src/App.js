import React, { Component } from 'react';
import Hello from './components/Hello';
import { getHello } from './api';
import History from './components/History'

class App extends Component {
  state = {
    hello: '',
  };
  async componentDidMount() {
    try {
      const hello = await getHello().then(r => r.data.message);
      this.setState({ hello });
    } catch(err) {
      this.setState({ hello: 'API ไม่เสร็จ' });
    }
  }
  render() {
    // <Hello message={this.state.hello} />
    return (
      <History />
    );
  }
}

export default App;