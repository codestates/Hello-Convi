import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { actionCreators } from '../store/store';

function Nav () {
  const auth = useSelector(state => state.userInfo.auth, shallowEqual);
  const dispatch = useDispatch();
  const { logout } = actionCreators;

  const logoutHandler = () => {
    dispatch(logout());
  };
  // console.log(auth)
  return (
    <div>
      <span>
        <Link to='/'>Main&nbsp;&nbsp;</Link>
      </span>
<<<<<<< HEAD
      <span>
        <Link to='/mypage'>MyPage  </Link>
      </span>
=======
      {auth
        ? (
          <span>
            <span>
              <span onClick={logoutHandler}>Logout&nbsp;&nbsp;</span>
            </span>
            <span>
              <Link to='/mypage'>MyPage</Link>
            </span>
          </span>
          )
        : (
          <span>
            <span>
              <Link to='/login'>Login&nbsp;&nbsp;</Link>
            </span>
            <span>
              <Link to='/signup'>SignUp</Link>
            </span>
          </span>
          )}
>>>>>>> 305eccc2ddafa2239cfaf8cd820105c7d047053d
    </div>
  );
}

export default Nav;
