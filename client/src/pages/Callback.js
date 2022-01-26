import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// let count = 0
function Callback () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = actionCreators;
  useEffect(async () => {
    const url = new URL(window.location.href);

    console.log(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    // console.log(authorizationCode);
    if (authorizationCode) {
      const userdata = await axios.post('http://localhost:8080/oauth', { authorizationCode }, { withCredentials: true });
      // console.log(userdata.data.data);
      dispatch(login({ oauth: true, userId: userdata.data.data.id, email: userdata.data.data.email, nickname: userdata.data.data.nickname }));

      navigate('/');
    }
  }, []);

  // if(authorizationCode && count === 0){
  //     count++

  //     axios.get('http://localhost:8080/oauth')
  // }

  // useEffect(() => {
  //     const url = new URL(window.location.href);
  //     const authorizationCode = url.searchParams.get('code');
  //     console.log(authorizationCode);

  //     if (authorizationCode/*  && count === 0 */) {
  //       //count++;
  //       axios.post('http://localhost:8080/oauth', { authorizationCode: authorizationCode }, { withCredentials: true })
  //         .then(el => {
  //           dispatch(login({ userId: el.data.data.id, email: el.data.data.email, nickname: el.data.data.nickname }));
  //           navigate('/');
  //         });
  //     }
  //   }, [])

  return <div>...로딩중입니다</div>;
}

export default Callback;
