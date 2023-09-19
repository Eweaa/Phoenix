import { useState } from 'react';
import DoctorCardCSS from './DoctorCard.module.css';
import SVG1 from '../../assets/Vector (2).svg'
import SVG3 from "../../Assets/Vector (1).svg";
import SVG2 from "../../Assets/Vector.svg";
import { Link } from 'react-router-dom'

interface Props {
    Img:string,
    ID: number,
    Name:string,
    Rating:string,
    JD:string,
    NoV?:string,
    number:number
}


const DoctorCard = (props: Props) => {
    const url = "/doctors/";
      const time = new Date();
      const [modal, setModal] = useState<Boolean>(false);
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let theday = time.getDay() + 2;

  return (
    <div className={[DoctorCardCSS.DoctorCard, "mb-3 p-4"].join(" ")}>
      <div className={DoctorCardCSS.Doctorimg}>
        <img src={props.Img} alt="profile image" className="img-fluid" />
      </div>
      <div className={DoctorCardCSS.info}>
        <Link
          to={url.concat(props.ID.toString())}
          style={{ textDecoration: "none", color: "black" }}
        >
          Dr.
          <b className="mx-1">{props.Name}</b>
        </Link>
        <p style={{ color: "grey" }}>{props.JD}</p>
        <p>{props.Rating}</p>
        <p className={DoctorCardCSS.optional} style={{ color: "grey" }}>
          Overall Rating From {props.NoV} Visitors
        </p>
        <p className={DoctorCardCSS.optional}>
          <img src={SVG1} style={{ marginRight: "10px" }} />A dermatologist
          specializing in plastic surgery and burns treatment
        </p>
        <p>
          <img src={SVG2} style={{ marginRight: "10px" }} />
          Start with 2 free sessions
        </p>
        <p>
          <img src={SVG3} style={{ marginRight: "10px" }} />
          {props.number}
        </p>
      </div>
      <div className={DoctorCardCSS.Appointments}>
        <div className={DoctorCardCSS.Time}>
          <p>Today</p>
          <ul>
            <input type="radio" id="12 AM" name="Today" value="12 AM" />
            <label htmlFor="12 AM">12 AM</label>
            <br />
            <input type="radio" id="12:30 AM" name="Today" value="12:30 AM" />
            <label htmlFor="12:30 AM">12:30 AM</label>
            <br />
            <input type="radio" id="1 AM" name="Today" value="1 AM" />
            <label htmlFor="1 AM">1 AM</label>
          </ul>
          <button onClick={() => setModal(true)}>Book</button>
        </div>

        <div className={DoctorCardCSS.Time}>
          <p>Tomorrow</p>
          <ul>
            <input type="radio" id="T12 AM" name="Today" value="12 AM" />
            <label htmlFor="T12 AM">12 AM</label>
            <br />
            <input type="radio" id="T12:30 AM" name="Today" value="12:30 AM" />
            <label htmlFor="T12:30 AM">12:30 AM</label>
            <br />
            <input type="radio" id="T1 AM" name="Today" value="1 AM" />
            <label htmlFor="T1 AM">1 AM</label>
          </ul>
          <button onClick={() => setModal(true)}>Book</button>
        </div>

        <div className={DoctorCardCSS.Time}>
          <p>
            {time.getDate() + 2}/{time.getMonth() + 1} {days[theday]}
          </p>
          <ul>
            <input type="radio" id="AT12 AM" name="Today" value="12 AM" />
            <label htmlFor="AT12 AM">12 AM</label>
            <br />
            <input type="radio" id="AT12:30 AM" name="Today" value="12:30 AM" />
            <label htmlFor="AT12:30 AM">12:30 AM</label>
            <br />
            <input type="radio" id="AT1 AM" name="Today" value="1 AM" />
            <label htmlFor="AT1 AM">1 AM</label>
          </ul>
          <button onClick={() => setModal(true)}>Book</button>
        </div>
      </div>

      {/* <div id="myModal" className={BurnCardCSS.modal} style={{display: modal ? 'block' : 'none'}}>
        <div className={BurnCardCSS.modalContent}>
          <span className={BurnCardCSS.close} style={{cursor: 'pointer'}} onClick={() => setModal(false)}>&times;</span>
          <p>Your appointment have been booked</p>
        </div>
      </div> */}
    </div>
  )
}

export default DoctorCard