import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// export const shadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
// export const hover = '0px 4px 10px rgba(0, 0, 0, 0.25)';

const ItemWrap = styled.div`
  display: flex;
  width: 490px;
  box-shadow: 0px 4px 10px #34495E;
  border-radius: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: white;
    transition: 0.1s;
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
    margin-top: 15px;
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
  margin-top: 28px;
  height: 10%;
  .nickname {
    width: 50%;
  }

  .faStar {
    color: #B2B2B2;
  }

  .yellowStar {
    color: orange;
  }
`;
// const scoretostar = (score) => { // 10000 11000 11100 11110 11111
//   return `${score}star`;
// };

function Item ({ item }) {
  const review = item.review;

  const scoreToStar = (score) => {
    const result = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= score) result.push(<FontAwesomeIcon className='yellowStar' icon={faStar} />);
      else if (i > score) result.push(<FontAwesomeIcon className='faStar' icon={faStar} />);
    }

    return result;
  };

  return (
    <ItemWrap>
      <ImgWrap>
        <img src={item.photo} alt='logo' />
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
