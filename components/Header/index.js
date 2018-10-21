import {Flex, Box} from '@rebass/grid';
import Downshift from 'downshift';
import {request} from 'graphql-request';
import _debounce from 'lodash/debounce';
import _map from 'lodash/map';
import getConfig from 'next/config';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {
  Header as SCHeader,
  Link,
  Input,
  Item,
  Items,
  SubmitLink
} from './styles';
import {Container} from '../Global/styles';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

export default class Header extends Component {
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
      itemList: [],
      queryText: props.defaultInputValue || ''
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
      case 'authors':
        type = 'authors';
        break;
      case 'tags':
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
      <SCHeader>
        <Container>
          <Flex>
            <Box width={1} px={2}>
              <Link href="/">
                <h1>the compiler</h1>
              </Link>
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
                  <div style={{display: 'inline-block'}}>
                    <Input {...getInputProps()} />

                    {isOpen &&
                      hasItems && (
                        <Items>
                          {_map(itemList, (item, key) => (
                            <Item
                              key={key}
                              highlighted={key === highlightedIndex}
                              {...getItemProps({item})}
                            >
                              {item.name}
                            </Item>
                          ))}
                        </Items>
                      )}
                  </div>
                )}
              </Downshift>
              <SubmitLink
                href="https://github.com/onthecompiler/thecompiler/issues/new?template=submission.md"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>submit</p>
              </SubmitLink>
            </Box>
          </Flex>
        </Container>
      </SCHeader>
    );
  }
}
