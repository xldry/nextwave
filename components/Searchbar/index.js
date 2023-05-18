import { useState } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

export default function Searchbar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <S.SearchContainer onSubmit={handleSubmit}>
      <S.Searchbar
        type="text"
        placeholder="Pesquise um post"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </S.SearchContainer>
  );
}