import dayjs from 'dayjs';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import Link from 'next/link';
import React, {Component} from 'react';

import {ByLine, Div, TagLine, Title} from './styles';
import {Spacing} from '../Global/styles';
import {createReadableId} from '../../utils/ids';

export default class Post extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {authors, date_published, tags, title, url} = this.props;

    return (
      <Div>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <Title>{title}</Title>
        </a>
        <Spacing />
        <ByLine>
          <p>
            By{' '}
            {authors &&
              _map(
                authors,
                (author, key) =>
                  author ? (
                    <Link
                      key={key}
                      href={`/authors/${createReadableId(author)}`}
                    >
                      <a>
                        <span>{author} </span>
                      </a>
                    </Link>
                  ) : null
              )}
          </p>
          <p>|</p>
          <p>{dayjs(date_published).format('MMMM DD YYYY')}</p>
        </ByLine>
        {tags &&
          !_isEmpty(tags) && (
            <>
              <Spacing />
              <TagLine>
                {_map(
                  tags,
                  (tag, key) =>
                    tag ? (
                      <Link key={key} href={`/tags/${createReadableId(tag)}`}>
                        <a>
                          <span>{tag}</span>
                        </a>
                      </Link>
                    ) : null
                )}
              </TagLine>
            </>
          )}
      </Div>
    );
  }
}
