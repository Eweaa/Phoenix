import React from 'react';
import ResultsCSS from "./Results.module.css";
import { Link } from "react-router-dom";
import User from "../../assets/GenericUser.jpg";
import classNames from "classnames";


const Results:React.FC = () => {
    
    const url = "/results/";

    const data = [
        {
          id: 1,
          name: "Ahmed",
          date: "29 Feb 10:30 am",
          gender: true,
          degree: "First",
        },
        {
          id: 2,
          name: "Mohammed",
          date: "29 Feb 10:30 am",
          gender: true,
          degree: "Second",
        },
        {
          id: 3,
          name: "Ali",
          date: "29 Feb 10:30 am",
          gender: true,
          degree: "Third",
        },
        {
          id: 4,
          name: "Yassin",
          date: "29 Feb 10:30 am",
          gender: false,
          degree: "NA",
        },
      ];
    

  return (
    <div className="p-4">
      <table className={[ResultsCSS.RST, "p-4"].join(" ")}>
        <tr className={[ResultsCSS.thead, ResultsCSS.NB, "p-4"].join(" ")}>
          <th
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            Patient
          </th>
          <th>Date of Burn Captured</th>
          <th>Burn Classification</th>
          <th
            style={{
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            Degree of Burn
          </th>
        </tr>
        {data.map((d) => (
          <tr>
            <td style={{ textAlign: "left" }}>
              <img
                src={User}
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt={d.name}
                className="mx-1 namesProp"
              />
              <Link
                to={url.concat(d.id.toString())}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "10px",
                }}
              >
                {d.name}
              </Link>
            </td>
            <td>{d.date}</td>
            <td style={{ fontWeight: "600", color: "#008894" }}>
              {d.gender ? "🗸" : "☓"}
            </td>
            <td>
              <div
                className={classNames(
                  "p-2",
                  d.degree === "First" && "first",
                  d.degree === "Second" && "second",
                  d.degree === "Third" && "third",
                  d.degree === "NA" && "NA"
                )}
                style={{
                  borderRadius: "15px",
                  width: "50%",
                  display: "inline-block",
                }}
              >
                {d.degree}
              </div>
            </td>
          </tr>
        ))}
        <tr style={{ border: "none" }} className={ResultsCSS.NB}>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Results