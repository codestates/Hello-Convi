import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
  border: 0.1px solid #34495E;
  box-shadow: 0px 4px 10px #34495E;
  border-radius: 15px;
  background: none;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
`;

function Search ({ setSearchedItem }) {
  // 검색하면 검색창 비우기 나중 추가
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  useEffect(() => {
    // axios
    axios.get('http://localhost:8080/getitems', config)
      .then(res => {
        setSearchedItem(res.data.data);
      });
    // console.log(itemlist)
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    // axios
    const query = event.target[0].value;
    axios.get(`http://localhost:8080/getitems?search=${query}`, config).then(res => {
      setSearchedItem(res.data.data);
    });
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
