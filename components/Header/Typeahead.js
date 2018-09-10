import {request} from 'graphql-request';
import Downshift from 'downshift';
import _debounce from 'lodash/debounce';
import _map from 'lodash/map';
import getConfig from 'next/config';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

export default class SearchTypeahead extends Component {
  static propTypes = {
    defaultInputValue: PropTypes.string,
    handleSelection: PropTypes.func,
    handleStateChange: PropTypes.func,
    renderList: PropTypes.func,
    renderTypeahead: PropTypes.func,
    types: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      queryText: props.defaultInputValue || '',
      itemList: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount() {
    this.handleSearch = _debounce(this.handleSearch, 250);
  }

  handleQueryChange(value) {
    if (value) {
      this.setState({queryText: value});
      this.handleSearch(value);
    } else {
      this.setState({queryText: value, itemList: []});
    }
  }

  handleSearch(query = '') {
    const QLQuery = `
      query searchQuery($query: String!) {
        search(q: $query) {
          id
          name
          type
        }
      }
    `;
    const variables = {query};

    request(apiUrl, QLQuery, variables)
      .then(data => {
        this.setState({itemList: data.search || []});
      })
      .catch(error => {
        console.error('An error occured while searching in the typeahead');
        console.log(error);

        this.setState({itemList: []});
      });
  }

  handleSelection(item) {
    let type = '';

    switch (item.type) {
      case 'author':
        type = 'authors';
        break;
      case 'language':
        type = 'languages';
        break;
      case 'tag':
        type = 'tags';
        break;
      default:
    }

    if (!type) {
      return;
    }

    Router.push(`/${type}/${item.id}`);
  }

  render() {
    const {queryText, itemList} = this.state;
    const hasItems = itemList.length > 0;

    return (
      <Downshift
        id="downshift-typeahead"
        inputValue={queryText}
        itemToString={item => ''}
        onInputValueChange={this.handleQueryChange}
        onSelect={this.handleSelection}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <input {...getInputProps()} />
            {isOpen &&
              hasItems &&
              _map(itemList, (item, key) => (
                <p key={key} {...getItemProps({item})}>
                  {item.name}
                </p>
              ))}
          </div>
        )}
      </Downshift>
    );
  }
}
