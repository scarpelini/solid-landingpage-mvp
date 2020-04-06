import React from 'react';

import OurExpertiseLayout from './Layout/OurExpertiseLayout';

interface Props {
  id: string;
}

class OurExpertise extends React.PureComponent<Props> {
  render() {
    return <OurExpertiseLayout id={this.props.id} />;
  }
}

export default OurExpertise;
