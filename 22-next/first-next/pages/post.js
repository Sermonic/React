const Post = ({ id }) => {
  return (
    <>
      <h1>You Are Looking at Post #{id}</h1>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;
