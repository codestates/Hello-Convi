import { useState } from 'react';
import Search from '../components/Search';
import Item from '../components/Item';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store/store';
import styled from 'styled-components';
import axios from 'axios';
// import dummyItems from '../dummy/dummyItems';

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
let count = 0; // 이거 안넣으면 클릭시에 인증코드가 두번세번날라가서 요청실패함
function Main () {
  const [searchedItem, setSearchedItem] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCurItemInfo, login } = actionCreators;

  const handleOnClick = (event, item) => {
    console.log(searchedItem); // semistandard때문에 하나 넣음
    // item redux에 저장
    dispatch(setCurItemInfo(item));
    navigate('/iteminfo');
  };

  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  console.log(authorizationCode);

  if (authorizationCode && count === 0) {
    count++;
    axios.post('http://localhost:8080/oauth', { authorizationCode: authorizationCode }, { withCredentials: true })
      .then(el => {
        console.log(el.data.data);
        dispatch(login({ userId: el.data.data.id, email: el.data.data.email, nickname: el.data.data.nickname }));
        navigate('/');
      });
  }

  return (
    <MainWrap>
      <img src='/images/logo3.png' alt='logo' />
      <Search setSearchedItem={setSearchedItem} />
      <SectionWrap>
        {/* 나중에 dummydata 대신에 searchedItem으로 렌더링 */}
        {searchedItem.map((item, idx) => {
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
