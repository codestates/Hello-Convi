import dummyItems from '../dummy/dummyItems';
import { useState } from 'react';

import Search from '../components/Search';
import Item from '../components/Item';
import ReviewModal from '../components/ReviewModal';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../store/store';

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
    <div style={{ backgroundColor: '#EEE6C4' }}>
      <Search setSearchedItem={setSearchedItem} />
      <ReviewModal />
      <section>
        {/* 나중에 dummydata 대신에 searchedItem으로 렌더링 */}
        {dummyItems.map((item, idx) => {
          return (
            <div key={idx} onClick={(event) => handleOnClick(event, item)}>
              <Item item={item} />
            </div>
          );
        })}
      </section>

    </div>
  );
}

export default Main;
