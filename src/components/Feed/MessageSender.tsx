import React, {useState} from 'react';
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MSCSS from './MessageSender.module.css';

const Feed: React.FC = () => {

    const [input, setInput] = useState<string>("");

//   const handleSubmit = (e: HTMLFormElement) => {
//     e.preventDefault();
//     setInput("");
//   };

  return (
    <div className={[MSCSS.messageSender, 'mt-2 mb-3'].join(' ')}>
      
      <div className={MSCSS.messageSender__top}>
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={MSCSS.messageSender__input}
            placeholder={`What's happening?`}
          />
        </form>
      </div>
      
      <div className={MSCSS.messageSender__bottom}>
        <div className={MSCSS.messageSender__option}>
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <label className={MSCSS.messageSender__option}>
          <input type="file" />
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </label>
        <div className={MSCSS.messageSender__option}>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
        <div className={MSCSS.messageSender__option}>
          <button
            className={[MSCSS.messagebtn, 'p-2'].join(' ')}
            type="submit"
            // onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feed