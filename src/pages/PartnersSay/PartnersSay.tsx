import React from 'react';

import PartnersSayLayout from './Layout/PartnersSayLayout';

interface Props {
  id: string;
}

class PartnersSay extends React.PureComponent<Props> {
  render() {
    return <PartnersSayLayout id={this.props.id} />;
  }
}

export default PartnersSay;
