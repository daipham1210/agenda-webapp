import React from 'react';
class Wrapper extends React.Component {
  render() {
    const { clsName, children } = this.props;

    return (
      <div className={clsName ? `wrapper ${clsName}` : 'wrapper'}>
        {children}
      </div>
    )
  }
}

export default Wrapper;