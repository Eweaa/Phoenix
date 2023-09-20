import React from 'react';
import RequestsCSS from "./Requests.module.css";
import GenImg from '../../assets/GenericUser.jpg';

const Requests: React.FC = () => {

    const data = [
        {
          name: "Ahmed",
          date: "29 Feb 10:30 am",
          gender: "male",
          status: "pending",
        },
        {
          name: "Mohammmd",
          date: "29 Feb 10:30 am",
          gender: "male",
          status: "pending",
        },
        {
          name: "Fahmy",
          date: "29 Feb 10:30 am",
          gender: "male",
          status: "pending",
        },
        {
          name: "Ali",
          date: "29 Feb 10:30 am",
          gender: "male",
          status: "pending",
        },
      ];

  return (
    <div className="p-4">
      <h3 className="mb-4">Incoming Requests</h3>
      <table className={[RequestsCSS.RQT, "p-4"].join(" ")}>
        <tr className={[RequestsCSS.thead, RequestsCSS.NB, "p-4"].join(" ")}>
          <th
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            Patient
          </th>
          <th>Appointment</th>
          <th>Gender</th>
          <th>Action</th>
          <th
            style={{
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            Status
          </th>
        </tr>
        {data.map((d) => (
          <tr>
            <td style={{ textAlign: "left" }}>
              <img
                src={GenImg}
                className="Genimg"
                style={{
                  marginRight: "10px",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {d.name}
            </td>
            <td>{d.date}</td>
            <td>{d.gender}</td>
            <td>
              <button className={[RequestsCSS.cnclBtn, "p-1 mx-1"].join(" ")}>
                Cancel
              </button>
              <button className={[RequestsCSS.cnfrmBtn, "p-1 mx-1"].join(" ")}>
                Confirm
              </button>
            </td>
            <td>{d.status}</td>
          </tr>
        ))}
        <tr style={{ border: "none" }} className={RequestsCSS.NB}>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Requests