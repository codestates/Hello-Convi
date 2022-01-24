import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { actionCreators } from '../store/store';
import styled from 'styled-components';

function Nav () {
  const auth = useSelector(state => state.userInfo.auth, shallowEqual);
  const dispatch = useDispatch();
  const { logout } = actionCreators;

  const Nav = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0 0.5px 3px 0;
  `

  const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 70px 0 70px ;
    img {
      height: 50px;
      width: 100px;
    }
  `

  const NavTap = styled.div`
    .btn {
      text-decoration-line: none;
      color: #34495E;
      &:hover {
        cursor: pointer;
        outline: none;
        color: black;
      }
    }
  `

  const LinkWrap = styled.div`
    margin-bottom: 15px;
  `

  const logoutHandler = () => {
    dispatch(logout());
  };
  // console.log(auth)
  return (
    <Nav>
      <NavWrap>
        <Link to='/'><img src='/images/logo2.png' alt='logo'/></Link>
        <NavTap>
         {auth
          ? (
            <span>
              <span>
                <span onClick={logoutHandler} className='btn'>Logout&nbsp;&nbsp;</span>
              </span>
              <span>
                <Link to='/mypage' className='btn'>MyPage</Link>
              </span>
            </span>
            )
          : (
            <LinkWrap>
              <Link to='/login' className='btn'>Login&nbsp;&nbsp;</Link>
              <Link to='/signup' className='btn'>SignUp</Link>
            </LinkWrap>
          )}
        </NavTap>
      </NavWrap>
    </Nav>
  );
}

export default Nav;
