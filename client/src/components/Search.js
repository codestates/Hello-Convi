import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchWrap = styled.form`
  display: flex;
`;

const Searchbtn = styled.button`
  background: none;
  left: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  outline: 0;
  border: 0;
  color: #34495E;
  &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
  }
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 0 0 0 10px;
  width: 400px;
  height: 50px;
  border: 3px solid #34495E;
  border-radius: 0;
  background: none;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
`;

function Search ({ setSearchedItem }) {
  // 검색하면 검색창 비우기 나중 추가
  useEffect(() => {
    // axios
  }, []);

  const onSubmitHandler = (event) => {
    console.log(event.target[0].value);
    // axios
    setSearchedItem(event.target[0].value);
    event.preventDefault();
  };

  return (
    <div>
      <SearchWrap onSubmit={onSubmitHandler}>
        <SearchInput type='text' placeholder='상품명검색' />
        <Searchbtn>
          <FontAwesomeIcon className='icon' icon={faSearch} size='2x' />
        </Searchbtn>
      </SearchWrap>
    </div>
  );
}

export default Search;
