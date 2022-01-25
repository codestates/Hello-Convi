import styled from 'styled-components';

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
`;

function Item ({ item }) {
  const review = item.review;

  

  return (
    <ItemWrap>
      <ImgWrap>
        <img src='/images/logo2.png' alt='logo' />
        <span>{item.score}</span>
      </ImgWrap>
      <SectionWrap>
        <ItemInfoWrap>
          <h3 className='itemname'>{item.itemname}</h3>
          <h3 className='itemprice'>{item.price}</h3>
        </ItemInfoWrap>
        <ReviewWrap>
          <div>{review.content}</div>
          <ReviewInfo>
            <span className='nickname'>{review.nickname}</span>
            <span>{review.score}</span>
          </ReviewInfo>
        </ReviewWrap>
      </SectionWrap>
    </ItemWrap>
  );
}

export default Item;
