import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SBCSS from './SettingsBtn.module.css';
import SVG from "../../assets/Vector (3).svg";
import SVG2 from "../../assets/ic_baseline-log-out.svg";
import SVG3 from "../../assets/angle-right-b.svg";

const SettingsBtn:React.FC = () => {

    const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={[SBCSS.notificationicon, 'mx-1']. join(' ')} style={{ display: "inline-block" }}>
      <button onClick={() => setIsOpen(!isOpen)} className={SBCSS.upBtn}>
        
        <img
          className={SBCSS.profBar}
          src="https://th.bing.com/th/id/R.527c33c37149dfe8297bec9d7e44899a?rik=sx9smtloPK1WdA&pid=ImgRaw&r=0https://th.bing.com/th/id/R.527c33c37149dfe8297bec9d7e44899a?rik=sx9smtloPK1WdA&pid=ImgRaw&r=0"
        />
        
      </button>
      {isOpen && (
        <div className={SBCSS.dropdown} style={{ minHeight: "250px" }}>
          <div className="noti-content">
            <div className="notification_top container">
              <img
                src="https://th.bing.com/th/id/OIP.z1Fl9P5QfqFRfLuPS5GjQwHaFk?pid=ImgDet&rs=1"
                className={SBCSS.imgModi}
              />
              <span className={SBCSS.profileHeader}>Ahmed Mostafa</span>
            </div>
            <hr />
            <div className="">
              <div className={SBCSS.setIcon}>
                <Link className={SBCSS.btnModi} to="/settings">
                  <img src={SVG} className={SBCSS.iconMo} />
                  Settings & Privacy
                  <img src={SVG3} className={SBCSS.iconMoh} />
                </Link>
              </div>
              <button
                className={SBCSS.btnModi}
                style={{
                  border: "none",
                  outline: "none",
                  color: "#4E5D78",
                  display: "flex",
                }}
              >
                <img src={SVG2} className={SBCSS.iconMo} />
                Log Out
                <img src={SVG3} className={SBCSS.iconMohh} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingsBtn