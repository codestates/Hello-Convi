<<<<<<< HEAD
function ItemInfo () {
    return (
        <div>
            hi
        </div>
    )
}

export default ItemInfo;
=======
import { useSelector } from 'react-redux';
import { useEffect /* useState */ } from 'react';
// import Search from "../components/Search";
import dummyItem1Reviews from '../dummy/item1Reviews';
import Review from '../components/Review';

function ItemInfo () {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };

  // const [searchedItem, setSearchedItem] = useState([]); - advanced
  // const[reviews, setReviews] = useState([]); -> axios 구현한 후 이걸로 사용
  // const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    // axios.get('', config)
    //   .then((res) => {
    //     setReviews(res.data.data)
    //   })
    //   .catch((err)=>{
    //     setIsErr(true);
    //   })
  }, []);

  const curItemInfo = useSelector(state => state.curItemInfo);
  // console.log(curItemInfo);
  return (
    <div>
      {/* advanced : iteminfo의 search 요소는 추후 모달 방식 이용하여 추가 */}
      {/* <Search setSearchedItem={setSearchedItem}/> */}
      <button>리뷰작성</button>
      <div>
        <div>{curItemInfo.photo}</div>
        <div>
          {curItemInfo.itemname}<br />{curItemInfo.price}
        </div>
        {dummyItem1Reviews.map((review, idx) => {
          return <Review key={idx} review={review} />;
        })}
      </div>
    </div>
  );
}

export default ItemInfo;
>>>>>>> 305eccc2ddafa2239cfaf8cd820105c7d047053d
