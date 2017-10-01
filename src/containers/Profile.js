import React from 'react';
import Profile from './../components/Profile'

export default class ProfileContainer extends React.Component {
  render() {
    let params;
    if (this.props.location.search) {
      const search = this.props.location.search.substring(1);
      params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    }
    console.log(params);
    return (
      <Profile id={params || ''} />
    );
  }
}