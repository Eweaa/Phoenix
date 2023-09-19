import { ChatBubbleOutline, NearMe, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import PostCSS from "./Post.module.css";

interface Props {
    profilePic:string,
    img:string,
    userName:string,
    message:string 
}

const Post:React.FC<Props> = ({ profilePic, img, userName, message }) => {
  return (
    <div className={[PostCSS.post, 'mb-3'].join(' ')}>
      <div className={PostCSS.post_top}>
        <Avatar src={profilePic} className={PostCSS.post_avatar} />
        <div className={PostCSS.post_topInfo}>
          <h3>{userName}</h3>
          <p>October 11</p>
        </div>
      </div>

      <div className={PostCSS.post_bottom}>
        <p>{message}</p>
      </div>

      <div className={PostCSS.post_image}>
        <img src={img} />
      </div>

      <div className={PostCSS.post_options}>
        <div className={PostCSS.post_option}>
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className={PostCSS.post_option}>
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className={PostCSS.post_option}>
          <NearMe />
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post