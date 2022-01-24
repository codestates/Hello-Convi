import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { actionCreators } from '../store/store';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Nav () {
  const auth = useSelector(state => state.userInfo.auth, shallowEqual);
  const dispatch = useDispatch();
  const { logout } = actionCreators;

  const Nav = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0 0.5px 3px 0;
  `;

  const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 70px 0 70px ;
    img {
      height: 50px;
      width: 100px;
    }
  `;

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
  `;

  const ModalBtn = styled.div`
      text-decoration-line: none;
      color: #34495E;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        outline: none;
        color: black;
      }
  `

  const LinkWrap = styled.div`
    display: flex;
    align-items: center;
  `;

  const LoginWrap = styled.div`
    display: flex;
    align-items: center;
    span {
      padding: 0 10px 0 10px;
    }
  `

  const logoutHandler = () => {
    dispatch(logout());
  };
  // console.log(auth)
  return (
    <Nav>
      <NavWrap>
        <Link to='/'><img src='/images/logo2.png' alt='logo' /></Link>
        <NavTap>
          {auth
            ? (
              <LoginWrap>
                <ModalBtn>
                  <FontAwesomeIcon className='icon' icon={faEdit} />
                </ModalBtn>
                <span onClick={logoutHandler} className='btn'>Logout&nbsp;&nbsp;</span>
                <Link to='/mypage' className='btn'>MyPage</Link>
              </LoginWrap>
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
