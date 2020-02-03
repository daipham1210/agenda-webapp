import React from 'react';
import CategoryItem from './Item';
import ExpansionList from './ExpansionList';

class List extends React.Component {
  render() {
    const { title, clsName, elements } = this.props;

    return (
      <div className={clsName ? `list ${clsName}` : 'list'}>
        <ExpansionList titleName={title}>
          <ul>
            {
              elements.map(({id, name, path, icon}) =>
                <CategoryItem key={id} label={name} path={path} icon={icon} />
              )
            }
          </ul>
        </ExpansionList>
      </div>
    )
  }
}

export default List;