import React from 'react';

import TechStackLayout from './Layout/TechStackLayout';

interface Props {
  id: string;
}

class TechStack extends React.PureComponent<Props> {
  render() {
    return <TechStackLayout id={this.props.id} />;
  }
}

export default TechStack;
