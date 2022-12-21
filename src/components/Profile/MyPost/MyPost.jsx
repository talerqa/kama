import MyPostCss from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={MyPostCss.post}>
      <p>MY POST:</p>
      <Post message="Hi, what's up" like="15" />
      <Post message="How old are you" like="20" />
      <Post message="I'm great" like="6" />
    </div>
  );
};

export default MyPost;
