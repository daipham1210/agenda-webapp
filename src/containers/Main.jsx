import React from 'react';
import Wrapper from './Wrapper';

class Main extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Wrapper clsName="main">
        {children}
      </Wrapper>
    )
  }
}

export default Main;