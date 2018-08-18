import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

import Article from '../Article';
import * as GSC from '../Global.styles';

const minimumBottomDistance = 150;

export default class ArticleList extends Component {
  static propTypes = {
    handlePaginate: PropTypes.func,
    items: PropTypes.array,
    loading: PropTypes.bool,
    loadingError: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // this.handleScroll = _debounce(this.handleScroll, 50);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const distanceToBottom = Math.max(
      bodyHeight - (scrollPosition + windowSize),
      0
    );

    if (distanceToBottom < minimumBottomDistance) {
      this.props.handlePaginate();
    }
  }

  render() {
    const {items = [], loading, loadingError} = this.props;
    const noItems = items.length === 0;

    return (
      <GSC.Card>
        {noItems ? (
          <h2>No items found</h2>
        ) : (
          <Fragment>
            {items.map(item => (
              <Article key={item._id} {...item} />
            ))}
            {loading ? (
              <p>spinner</p>
            ) : (
              <Fragment>
                {loadingError && <p>error</p>}
                <p>load more button</p>
              </Fragment>
            )}
          </Fragment>
        )}
      </GSC.Card>
    );
  }
}
