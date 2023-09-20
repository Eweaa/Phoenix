import React, {useState} from 'react'
import LayoutCSS from './Layout.module.css';
import { Outlet, Link } from 'react-router-dom'
import PNavbar from '../../components/Navbar/PHeader/PHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faGear, faHandFist, faImage, faUser, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import GenericUser from '../../assets/GenericUser.jpg';
import Chatbot from '../../assets/Vector.png'

const PatientLayout: React.FC = () => {

    const [chatbot, setChatbot] = useState<boolean>(false);
    const [aside, setAside] = useState<Boolean>(false);

    const friendRequests = [
        {
          id:1,
          name:'Julia Mauri'
        },
        {
          id:2,
          name:'Karen'
        }
      ]

  return (
    <>
        <PNavbar aside={aside} setAside={setAside} />

        <div>
            <div style={{display: aside ? 'block' : 'none' ,position: 'absolute', background:'grey', width:'100vw', height:'100vh', zIndex:'1', opacity:'0.5', top:'0'}} onClick={() => setAside(!aside)}/>
            <div className={LayoutCSS.MobileAside} style={{translate: aside ? '0%' : '-100%'}}>
                <ul>

                    <li>
                    <Link to='/' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faUser} className='mx-2'/>
                        <span>
                        Feed
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/watch' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faCirclePlay} className='mx-2'/>
                        <span>
                        Watch
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/doctors' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                        <span>
                        Doctors
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/burn-degree' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faImage} className='mx-2'/>
                        <span>
                        Identify the burn degree
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/motivation' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faHandFist} className='mx-2'/>
                        <span>
                        Motivation
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/settings' onClick={() => setAside(!aside)}>
                        <FontAwesomeIcon icon={faGear} className='mx-2'/>
                        <span>
                        Settings
                        </span>
                    </Link>
                    </li>

                </ul>
            </div>
        </div>

        <div className={[LayoutCSS.Layout, 'p-2'].join(' ')}>

            <nav>
                <ul>
                    <li>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faUser} className='mx-2'/>
                        <span>
                        Feed
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/watch'>
                        <FontAwesomeIcon icon={faCirclePlay} className='mx-2'/>
                        <span>
                        Watch
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/doctors'>
                        <FontAwesomeIcon icon={faUserDoctor} className='mx-2'/>
                        <span>
                        Doctors
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/burn-degree'>
                        <FontAwesomeIcon icon={faImage} className='mx-2'/>
                        <span>
                        Identify the burn degree
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/motivation'>
                        <FontAwesomeIcon icon={faHandFist} className='mx-2'/>
                        <span>
                        Motivation
                        </span>
                    </Link>
                    </li>

                    <li>
                    <Link to='/settings'>
                        <FontAwesomeIcon icon={faGear} className='mx-2'/>
                        <span>
                        Settings
                        </span>
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



            <button className={[LayoutCSS.Chatbot, 'p-2'].join(' ')} onClick={() => setChatbot(!chatbot)} style={{display: chatbot ? 'none' : 'block'}}>
                <img src={Chatbot}/>
            </button>
            <div style={{display: chatbot ? 'block' : 'none'}}>
                {/* <ChatBot toggle={chatbot} togglefunc={setChatbot}/> */}
            </div>
            

        </div>
    </>
  )
}

export default PatientLayout