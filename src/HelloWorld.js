import React, { Component } from 'react';
import Hello from './components/Hello';
import { getHello } from './api';

class HelloWorld extends Component {
  state = {
    hello: '',
  };
  async componentDidMount() {
    try {
      const hello = await getHello().then(r => r.data.message);
      this.setState({ hello });
    } catch(err) {
      console.log(err);
    }
  }
  render() {
    return (
      <Hello message={this.state.hello} />
    );
  }
}

export default HelloWorld;