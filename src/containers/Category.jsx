import React from 'react';
import Wrapper from './Wrapper';
import List from 'components/Category/List';
import Overview from 'constants/Overview';

class Category extends React.Component {
  render() {
    return (
      <Wrapper clsName="category">
        <List clsName="overview" title="Overview" elements={Overview} />
        <List clsName="sample" title="Sample Projects" elements={[]} />
      </Wrapper>
    )
  }
}

export default Category;