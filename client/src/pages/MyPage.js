import dummyItems from '../dummy/dummyItems';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function MyPage () {
    const userState = useSelector(state => state);
    console.log(userState)

    return (
        <div>
            <div>
                <div>이름</div>
                <div>
                    <div>email</div>
                    <button>회원정보수정</button>
                </div>
            </div>
            <div>
                {/* axios, item 컴포넌트 그대로 채용 */}
            </div>
        </div>
    )
}

export default MyPage;