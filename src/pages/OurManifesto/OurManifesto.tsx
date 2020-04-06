import React from 'react';

import OurManifestoLayout from './Layout/OurManifestoLayout';

interface Props {
  id: string;
}

class OurManifesto extends React.PureComponent<Props> {
  render() {
    return <OurManifestoLayout id={this.props.id} />;
  }
}

export default OurManifesto;
