import {
  HeaderSearchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Searchbar({ handleSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!query.trim()) {
      alert('Type something...');
      return;
    }

    handleSubmit(normalizedQuery);

    setQuery('');
  };

  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchFormBtn type="submit">
          <BiSearchAlt2 size={20} />
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </SearchForm>
    </HeaderSearchbar>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
