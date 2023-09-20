import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMessage } from "@fortawesome/free-solid-svg-icons"; 
import MBCSS from './MessageBtn.module.css';

const MessageBtn:React.FC = () => {

    const [isOpen, setIsOpen] = useState<Boolean>(false); 

  return (
    <div className={[MBCSS.messengericon, 'mx-1'].join(' ')} style={{ display: "inline-block" }}> 
      <button onClick={() => setIsOpen(!isOpen)}> 
        {/* Add the notification icon image */} 
        {/* <NotificationAddOutlined /> */} 
        <FontAwesomeIcon icon={faMessage} /> 
      </button> 
      {isOpen && ( 
        <div className={MBCSS.dropdown}> 
          <div className="msg-content"> 
            <div className={MBCSS.msg_top}> 
              <span>Chats</span> 
              <i>Sttt</i> 
            </div> 
 
            <div className="msg_content"> 
              <div className="col"> 
                <div className={MBCSS.contentsec}> 
                  <img 
                    src="https://ilarge.lisimg.com/image/8073204/740full-gentleman.jpg" 
                    style={{ objectFit: "cover" }} 
                  /> 
                  <div className={MBCSS.text}> 
                    <p> 
                      <span>Moahmmd Elsayed</span> what's wrong? 
                    </p> 
                    <span className={MBCSS.action_time}>5 hours ago</span> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      )} 
    </div> 
  )
}

export default MessageBtn