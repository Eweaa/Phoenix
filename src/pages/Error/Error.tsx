import ErrorImg from '../../Assets/g10.png'
import Polygon1 from '../../Assets/Polygon 1.png'
import Polygon2 from '../../Assets/Polygon 2.png'
import ErrorCSS from './Error.module.css';
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className={ErrorCSS.Error}>
        <div className={ErrorCSS.LD}>
          <img className={ErrorCSS.ErrorImg} src={ErrorImg}/>
          <img className={ErrorCSS.Polygon1} src={Polygon1}/>
        </div>
        <div className={ErrorCSS.RD}>
          <img className={ErrorCSS.Polygon2} src={Polygon2}/>
          <div>
            The requested URL was not found on this server
            <br />
            <Link to='/'>Back To Home</Link>
          </div>
        </div>
    </div>
  )
}

export default Error