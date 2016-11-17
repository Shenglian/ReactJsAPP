/*jshint esversion: 6 */

import React from 'react';

export default class Questions extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {

    let style = {
      backgroundImage: 'url(' + '/imgs/pc.png' + ')',
      backgroundAttachment: 'fixed'
    };

    return (
      <div id="wrapper" style={ style }>
        <div className="btn-mix-reset" data-text="我要贊助">我要贊助</div>
      </div>
    );
  }
}


