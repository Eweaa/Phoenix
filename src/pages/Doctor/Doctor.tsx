import React from 'react';
import DoctorCSS from './Doctor.module.css';
import SVG1 from "../../Assets/Vector (2).svg";
import SVG3 from "../../Assets/Vector (1).svg";
import SVG2 from "../../Assets/Vector.svg";
import Review from '../../components/Review/Review';

const Doctor: React.FC = () => {

    const Reviews = [
        {
          id: 1,
          name: "Julia Mauri",
          content: "'He was helpful, nice, an excellent service. am satisfied'",
        },
        {
          id: 2,
          name: "Mostafa Nabil",
          content:
            "'Was patient in listening to all of my concerns and addressing them with medication recommendations and lifestyle advice. Would definitely recommend her.'",
        },
        {
          id: 3,
          name: "Ehab Amar",
          content: "'Great doctor. She was very helpful and professional. '",
        },
      ];

  return (
    <div>
      <div className={[DoctorCSS.content, 'p-4'].join(' ')}>
        <div>
          <img
            src="https://templatekits.themewarrior.com/medicate/wp-content/uploads/sites/7/2020/09/Doctor-4-271x300.jpg"
            style={{ objectFit: "cover" }}
            className={DoctorCSS.docImg}
          />
        </div>
        <div className={DoctorCSS.docInfo}>
          <h3 className={DoctorCSS.midyHaed}>
            Doctor <span>Abdallah Walid</span>
          </h3>

          <p className={DoctorCSS.rightSide}>
            Dermatologist Specialised in adults, Hand surgy, burn surgy
            Pediatric Dermatology and Cosmatic Dermatology and Laser Distance :
            3 KM
            <br />
            ⭐️⭐️⭐️⭐️⭐️
            <br />
            overall rating from 115 visitors
            <br />
            <div className="my-2">
              <img src={SVG1} style={{ marginRight: "10px" }} />
              Dermatologist Specialised
            </div>
            <div className="my-2">
              <img src={SVG2} style={{ marginRight: "10px" }} />
              Start with 2 free session
            </div>
            <div className="my-2">
              <img src={SVG3} style={{ marginRight: "10px" }} />
              12345
            </div>
            <div className="">
              <button
                style={{
                  background: "#008894",
                  color: "white",
                  borderRadius: "10px",
                  outline: "none",
                  border: "none",
                }}
                className="p-2 my-2"
              >
                Talk now with doctor Abdallah Walid
              </button>
            </div>
          </p>
        </div>
      </div>
      <div className={DoctorCSS.Reviews} style={{ borderRadius: "15px" }}>
        <h6 className="p-2 mx-4">Reviews</h6>
        <div>
          {Reviews.map((r) => (
            <Review key={r.id} name={r.name} content={r.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor