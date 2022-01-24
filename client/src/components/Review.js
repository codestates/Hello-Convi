function Review ({ review }) {
  return (
    <div>
      <div>
        <div>{review.createdAt}</div>
        <div>{review.score}</div>
        <div>{review.nickname}</div>
      </div>
      <div>{review.content}</div>
    </div>
  );
}

export default Review;
