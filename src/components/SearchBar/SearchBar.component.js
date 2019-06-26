import React, { createRef } from 'react';
import { searchVideo } from '../../services/YoutubeService';
import { searchAttractions } from '../../services/TicketMasterService';
import { useDispatch, useSelector } from 'react-redux';
import { 
  updateVideos,
  updateQuery,
  updateArtistInfo,
  updateLoading
} from '../../actions/SearchActions';

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
  const dispatch = useDispatch();
  const query = useSelector(state => state.query);
  const inputSearch = createRef();

  const search = () => {
    searchVideo(query)
    .then(res => {
      dispatch(updateVideos(res.items));
      dispatch(updateLoading(false));
    });
    searchAttractions(query)
    .then(res => {
      dispatch(updateArtistInfo(res));
    });
  }

  const handleFormSubmit = event => {
    if( event ) event.preventDefault();
    inputSearch.current.blur();
    dispatch(updateArtistInfo({}));
    dispatch(updateVideos([]));
    dispatch(updateLoading(true));
    search();
  }

  const handleChangeQuery = event => {
    const text = event.target.value;
    dispatch(updateQuery(text));
  }

  const clearQuery = () => dispatch(updateQuery(''));

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
            ref={inputSearch}
            spellcheck={false}
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