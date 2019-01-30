import React, { PureComponent, Component } from 'react';
// import sendErr from './sendErr';

class CustomErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErr: false
    };
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.log(info);
    this.setState(state => ({
      ...state,
      hasErr: true
    }))
    // sendErr(error, info);
  }

  render() {
    if (this.state.hasErr) {
      return (
        <div> Oops, Error </div>
      );
    } else {
      return this.props.children;
    }
  }
}

const Profile = (props) => (
  <div>
    Name: {props.user.name}
  </div>
);

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: 'foobar'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      ...state,
      user: null
    }));
  }

  render() {
    return (
      <div>
        <CustomErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.handleClick}>Trigger Error</button>
        </CustomErrorBoundary>
      </div>
    );
  }
}