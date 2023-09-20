import React from 'react'
import DHeader from '../../components/Navbar/DNavbar/DHeader';
import LayoutCSS from '../PatientLayout/Layout.module.css'
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import GenericUser from '../../assets/GenericUser.jpg'
import { faUserDoctor, faGear, faImage, faUser, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const DoctorLayout: React.FC = () => {

    const friendRequests = [
        {
          id:1,
          name:'Mohamed'
        },
        {
          id:2,
          name:'Zaki'
        },
        {
          id:3,
          name: 'Yousef'
        }
      ]

  return (
    <div>
      <DHeader />

      <div className={[LayoutCSS.Layout, 'p-2'].join(' ')}>
        <nav className='p-2'>
          <ul>

            <li>
              <Link to='/'>
                <FontAwesomeIcon icon={faUser} className='mx-2'/>
                Feed
              </Link>
            </li>

            <li>
              <Link to='/watch'>
                <FontAwesomeIcon icon={faCirclePlay} className='mx-2'/>
                Watch
              </Link>
            </li>

            <li>
              <Link to='/requests'>
                <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                Requests
              </Link>
            </li>

            <li>
              <Link to='/results'>
                <FontAwesomeIcon icon={faImage} className='mx-2'/>
                Results
              </Link>
            </li>

            <li>
              <Link to='/settings'>
                <FontAwesomeIcon icon={faGear} className='mx-2'/>
                Settings
              </Link>
            </li>

          </ul>

        </nav>

        <main>
          
          <div className='p-4' style={{overflowY:'scroll'}}>
            <Outlet />
          </div>
          
          <aside className={[LayoutCSS.FriendRequestAside, 'p-2'].join(' ')} >
              <div className={[LayoutCSS.FriendRequest, 'mb-2'].join(' ')}>
                  Friends Requests
                  <span>
                      {friendRequests.length}
                  </span>
              </div>
              {friendRequests.map((friendRequest) => <FriendRequest key = {friendRequest.id} name={friendRequest.name} Img={GenericUser}/>)}
          </aside>
        </main>

      </div>
    </div>
  )
}

export default DoctorLayout