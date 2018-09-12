import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import Link from 'next/link';
import React, {Component} from 'react';

import * as SC from './styles';
import * as GSC from '../Global.styles';

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
        <SC.InfoLine>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <SC.Title>{title}</SC.Title>
          </a>
        </SC.InfoLine>
        <SC.InfoLine>
          <SC.Authors>
            <p>
              By
              {authors &&
                _map(
                  authors,
                  (author, key) =>
                    author ? (
                      <Link key={key} href={`/authors/${author.id}`}>
                        <a>
                          <span>{author.name}</span>
                        </a>
                      </Link>
                    ) : null
                )}
            </p>
            <span>|</span>
            <p>{_capitalize(type)}</p>
            <span>|</span>
            <p>{dayjs(date_published).format('MMMM DD YYYY')}</p>
          </SC.Authors>
        </SC.InfoLine>
        {(!_isEmpty(languages) || !_isEmpty(tags)) && (
          <SC.InfoLine>
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
          </SC.InfoLine>
        )}
      </SC.Div>
    );
  }
}
