import React, { /* useState, */ useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';

function MyPage () {
  const userInfo = useSelector(state => state.userInfo);
  // const [itemReviewed, setItemReviewed] = useState([]);

  useEffect(() => {
    // axios.get 하고 itemReviewed 채워넣기
  }, []);

  return (
    <div>
      <div>
        <div>{userInfo.nickname}</div>
        <div>
          <div>{userInfo.email}</div>
          <button>회원정보수정</button>
        </div>
      </div>
      <div>
        {/* itemReviewed.map 으로 펼치기 */}
        {/* item 컴포넌트 그대로 채용 */}
      </div>
    </div>
  );
}

export default MyPage;
