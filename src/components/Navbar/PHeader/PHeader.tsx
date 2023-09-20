import React from 'react';
import {Link} from 'react-router-dom'
import NavbarCSS from "./PNavbar.module.css";
import Phoenix from "../../../Assets/Phoenix.png";
import SettingsBtn from '../../SettingsBtn/SettingsBtn';
import MessageBtn from '../../MessagesBtn/MessageBtn';
import NotificationBtn from '../../NotificationBtn/NotificationBtn';

interface Props {
  aside:Boolean,
  setAside: React.Dispatch<React.SetStateAction<Boolean>>
}

const PNavbar: React.FC<Props> = ({ aside, setAside }) => {
  return (
    <header className={[NavbarCSS.nav, "p-2"].join(" ")}>

      <div className={NavbarCSS.logo}>
        <img src={Phoenix} className="mx-2" />
        <h2 className="mx-2">Phoenix</h2>
      </div>

      <button className={NavbarCSS.Hamburger} onClick={() => setAside(!aside)}>/\</button>

      <div className={NavbarCSS.search}>
        <input
          type="text"
          className="p-2"
          placeholder="🔍 Search for something here"
        />
      </div>

      <div className={NavbarCSS.Profile}>
        <Link
          to="/doctors"
          className={[NavbarCSS.bookBtn, "mx-1  p-2"].join(" ")}
        >
          Book Now
        </Link>
        {/* <Bell opt1="1" /> */}
        {/* <NotificationBtn /> */}
        <MessageBtn />
        {/* <SettingsBtn /> */}
      </div>
    </header>
  )
}

export default PNavbar