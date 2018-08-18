import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

import * as SC from './styles';

export default class Article extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const {} = this.props;

    return (
      <SC.Div>
        <p>article</p>
      </SC.Div>
    );
  }
}
