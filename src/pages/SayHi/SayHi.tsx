import React from 'react';

import SayHiLayout from './Layout/SayHiLayout';

interface Props {
  id: string;
}

class SayHi extends React.PureComponent<Props> {
  render() {
    return <SayHiLayout id={this.props.id} />;
  }
}

export default SayHi;
