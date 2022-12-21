import PostCss from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={PostCss.post}>
      <div className={PostCss.post__information}>
        <img
          className={PostCss.post__avatar}
          src="https://i.pinimg.com/736x/21/ed/6a/21ed6af9fbf3f8a33d8048e2d8e60fea.jpg"
          alt=""
        />
        <span className={PostCss.post__name}> Lesha </span>
      </div>
      <div className={PostCss.post__text}> {props.message} </div>
      <div className={PostCss.post__like}> 
        <span className={PostCss.post__like__text}>Liked: </span>
        <span className={PostCss.post__like__counter}>{props.like}</span>
        <span className={PostCss.post__like__text}> users</span>
      </div>
    </div>
  );
};

export default Post;
