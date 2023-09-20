import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NBCSS from './NotificationBtn.module.css';

const NotificationBtn:React.FC = () => {

    const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={[NBCSS.notificationicon, 'mx-1'].join(' ')} style={{ display: "inline-block" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* Add the notification icon image */}
        {/* <NotificationAddOutlined /> */}
        <FontAwesomeIcon icon={faBell} />
      </button>
      {isOpen && (
        <div className={NBCSS.dropdown}>
          <div className="noti-content">
            <div className="notification_top">
              <span>Notifications</span>
              <i>Sttt</i>
            </div>

            <div className="notification_content">
              <div className="col">
                <div className="content-sec">
                  <img src="https://ilarge.lisimg.com/image/8073204/740full-gentleman.jpg" style={{objectFit : "cover"}}/>
                  <div className="text">
                    <p>
                      <span>Moahmmd Elsayed</span> reacted to your post
                    </p>
                    <span className="action_time">5 hours ago</span>
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

export default NotificationBtn