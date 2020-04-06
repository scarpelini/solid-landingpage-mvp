import React from 'react';

import CompaniesLayout from './Layout/CompaniesLayout';

interface Props {
  id: string;
}

class Companies extends React.PureComponent<Props> {
  render() {
    return <CompaniesLayout id={this.props.id} />;
  }
}

export default Companies;
