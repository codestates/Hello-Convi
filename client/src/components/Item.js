import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ItemWrap = styled.div`
  display: flex;
  width: 490px;
  border: 3px solid #34495E;
  margin-bottom: 15px;
  &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
  }
`;
const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  img {
        height: 100px;
        width: 100px;
      }
  margin-bottom: 10px;
`;
const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ItemInfoWrap = styled.div`
  display: flex;
  .itemname {
    width: 50%;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 85px;
  div {
    height: 90%;
    word-break:break-all;
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: flex-end;
  height: 10%;
  .nickname {
    width: 50%;
  }

  .faStar {
    color: #B2B2B2;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;
// const scoretostar = (score) => { // 10000 11000 11100 11110 11111
//   return `${score}star`;
// };

const scoreToStar = (score) => {
  const result = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= score) result.push(<FontAwesomeIcon className='yellowStar' icon={faStar} />);
    else if (i > score) result.push(<FontAwesomeIcon className='faStar' icon={faStar} />);
  }

  return result;
};

function Item ({ item }) {
  const review = item.review;

  return (
    <ItemWrap>
      <ImgWrap>
        <img src='/images/logo2.png' alt='logo' />
        {item.score ? <span>{item.score}</span> : null}
      </ImgWrap>
      <SectionWrap>
        <ItemInfoWrap>
          <h3 className='itemname'>{item.itemname}</h3>
          <h3 className='itemprice'>{item.price}</h3>
        </ItemInfoWrap>
        {item.review
          ? (
            <ReviewWrap>
              <div>{review.content}</div>
              <ReviewInfo>
                <span className='nickname'>{review.nickname}</span>
                <span>{scoreToStar(review.score)}</span>
              </ReviewInfo>
            </ReviewWrap>)
          : (
            <div>리뷰가 없습니다.</div>
            )}
      </SectionWrap>
    </ItemWrap>
  );
}

export default Item;
