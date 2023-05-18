import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

export default function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <S.SearchContainer onSubmit={handleFormSubmit}>
      <S.Searchbar
        type="text"
        placeholder="Pesquise um post"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </S.SearchContainer>
  );
}