import React from 'react';

import SayHiLayout from './Layout/SayHiLayout';

interface Props {}

class SayHi extends React.PureComponent<Props> {
  render() {
    return <SayHiLayout />;
  }
}

export default SayHi;
