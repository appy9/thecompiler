import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import Link from 'next/link';
import React, {Component} from 'react';

import * as SC from './styles';
import * as GSC from '../Global/styles';

export default class Post extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {authors, date_published, tags, title, type, url} = this.props;

    return (
      <GSC.Card>
        <SC.Div>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <SC.Title>{title}</SC.Title>
          </a>
          <GSC.Spacing />
          <SC.ByLine>
            <p>
              By{' '}
              {authors &&
                _map(
                  authors,
                  (author, key) =>
                    author ? (
                      <Link key={key} href={`/authors/${author.id}`}>
                        <a>
                          <span>{author.name} </span>
                        </a>
                      </Link>
                    ) : null
                )}
            </p>
            {/* <p>|</p> */}
            {/* <p>{_capitalize(type)}</p> */}
            <p>|</p>
            <p>{dayjs(date_published).format('MMMM DD YYYY')}</p>
          </SC.ByLine>
          {tags &&
            !_isEmpty(tags) && (
              <>
                <GSC.Spacing />
                <SC.TagLine>
                  {_map(
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
                </SC.TagLine>
              </>
            )}
        </SC.Div>
      </GSC.Card>
    );
  }
}
