import React from 'react'
import Phoenix from '../../../Assets/Phoenix.png'
import GenericUser from '../../../Assets/GenericUser.jpg'
import NavbarCSS from '../PHeader/PNavbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons'


const DHeader:React.FC = () => {
  return (
    <header className={[NavbarCSS.nav, 'p-2'].join(' ')}>
        <div className={NavbarCSS.logo}>
            <img src={Phoenix} className='mx-2'/>
            <h2 className='mx-2'>Phoenix</h2>
        </div>
        <div className={NavbarCSS.search}>
            <input type='text' className='p-2' placeholder='🔍 Search for something here'/>
        </div>
        <div className={NavbarCSS.Profile}>
            <button className='mx-1 p-2'>
                <FontAwesomeIcon icon={faBell}/>
            </button>
            <button className='mx-1 p-2'>
                <FontAwesomeIcon icon={faMessage}/>
            </button>
            <button className='mx-1 p-2'>
                <img src={GenericUser}/>
            </button>
        </div>
    </header>
  )
}

export default DHeader