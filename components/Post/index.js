import _map from 'lodash/map';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

import * as SC from './styles';

export default class Post extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      authors,
      date_published,
      languages,
      tags,
      title,
      type,
      url
    } = this.props;

    return (
      <SC.Div>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <p>{title}</p>
        </a>
        {authors &&
          _map(
            authors,
            (author, key) =>
              author ? (
                <Link key={key} href={`/authors/${author.id}`}>
                  <a>
                    <p>{author.name}</p>
                  </a>
                </Link>
              ) : null
          )}
        <div>
          <span>{type}</span>
          {languages &&
            _map(
              languages,
              (language, key) =>
                language ? (
                  <Link key={key} href={`/languages/${language.id}`}>
                    <a>
                      <span>{language.name}</span>
                    </a>
                  </Link>
                ) : null
            )}
          {tags &&
            _map(
              tags,
              (tag, key) =>
                tag ? (
                  <Link key={key} href={`/tags/${tag.id}`}>
                    <a>
                      <span>{tag.name}</span>
                    </a>
                  </Link>
                ) : null
            )}
        </div>
        <p>Published {date_published}</p>
      </SC.Div>
    );
  }
}
