import React, { useState } from 'react';
import {
  searchVideo
} from '../../services/YoutubeService';
import Icon from '@mdi/react'
import { mdiClose, mdiMagnify } from '@mdi/js'
import {
  Wrapper,
  Form,
  InputWrapper,
  Input,
  ClearButton,
  SearchIcon
} from './SearchBar.style';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const search = () => {
    console.log(`search ${ query }`);
    searchVideo(query)
      .then(res => console.log(res));
  }

  const handleFormSubmit = event => {
    if( event ) event.preventDefault();
    search();
  }

  const handleChangeQuery = event => {
    const text = event.target.value;
    setQuery(text);
  }

  const clearQuery = () => setQuery('');

  return (
    <Wrapper>
      <Form onSubmit={event => handleFormSubmit(event)}>
        <InputWrapper>
          {
            !!!query.length && (
              <SearchIcon>
                <Icon path={mdiMagnify}
                  size={1.5}
                />
              </SearchIcon>
            )
          }
          <Input
            placeholder="Search..."
            lenght={ query.length }
            onChange={event => handleChangeQuery(event)}
            value={ query }
          />
          {
            !!query.length && (
              <ClearButton onClick={() => clearQuery()}>
                <Icon path={mdiClose}
                  size={1.5}
                />
              </ClearButton>
            )
          }
        </InputWrapper>
      </Form>
    </Wrapper>
  )
};

export default SearchBar;