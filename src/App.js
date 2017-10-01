import React, { Component } from 'react';
import Hello from './components/Hello';
import { getHello } from './api';
import ProfileContainer from './containers/Profile';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

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
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/qr">Scan QR</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={ProfileContainer}/>
          <Route path="/history" component={() => (<div> History </div>)}/>
          <Route path="/qr" component={() => (<div> QR </div>)}/>
        </div>
      </Router>
    );
  }
}

export default App;