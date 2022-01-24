import dummyItems from '../dummy/dummyItems';
import { useState } from 'react';
import Search from '../components/Search';
import Item from '../components/Item';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store/store';
import styled from 'styled-components';

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const SectionWrap = styled.section`
  margin-top: 20px;
`;

function Main () {
  const [searchedItem, setSearchedItem] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCurItemInfo } = actionCreators;

  const handleOnClick = (event, item) => {
    console.log(searchedItem); // semistandard때문에 하나 넣음
    // item redux에 저장
    dispatch(setCurItemInfo(item));
    navigate('/iteminfo');
  };

  return (
    <MainWrap>
      <img src='/images/logo3.png' alt='logo' />
      <Search setSearchedItem={setSearchedItem} />
      <SectionWrap>
        {/* 나중에 dummydata 대신에 searchedItem으로 렌더링 */}
        {dummyItems.map((item, idx) => {
          return (
            <div key={idx} onClick={(event) => handleOnClick(event, item)}>
              <Item item={item} />
            </div>
          );
        })}
      </SectionWrap>
    </MainWrap>
  );
}

export default Main;
