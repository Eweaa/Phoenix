import React, {useState, useRef} from 'react';
import Camera from "../../Assets/Vector (2).png";
import BurnCardCSS from './BurnCard.module.css';
import {Link} from 'react-router-dom';

const BurnDegree: React.FC = () => {

    const FDB:string[] = []
    const SDB:string[] = []
    const TDB:string[] = []

  const [file, setFiles] = useState<any>(null);
  const [degree, setDegree] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const imageRef = useRef();
  const [image, setImage] = useState<any>(null);
  const [show, setShow] = useState<Boolean>(true);
  const [modal, setModal] = useState<Boolean>(false);

  const onImageChange = (e) => {
    setModal(true)
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    setShow(false)
    let name = e.target.files[0].name
    if (FDB.find((e) => e === name)){
      setDegree("First Degree Burn");
      setMessage("move to see the first aids for first degree burn");
    }
    else if (SDB.find((e) => e === name)){
      setDegree("Second Degree Burn")
      setMessage("move to see the first aids for the second degree burn")
    }
    else if (TDB.find((e) => e === name)){
      setDegree("Third Degree Burn")
      setMessage("move to see the first aids for the third degree burn")
    }
    else{
      setDegree("Couldn't identify the degree")
      setMessage("Couldn't identify the degree")
    }
  }

  const details = (e) => {

    if (FDB.find((e) => e === file.name)) 
    {
      setDegree("First Degree Burn");
      setMessage("move to see the first aids for first degree burn");
    } 
    else if (SDB.find((e) => e === file.name)) 
    {
      setDegree("Second Degree Burn");
      setMessage("move to see the first aids for second degree burn");
    } 
    else if (TDB.find((e) => e === file.name)) 
    {
      setDegree("Third Degree Burn");
      setMessage("move to see the first aids for third degree burn");
    } 
    else setDegree("Couldn't identify");
  };

  return (
    <div className="p-2">
      <h2
        style={{
          textAlign: "center",
          color: "#008894",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
        }}
        className="px-2 pb-2"
      >
        Identify the degree of burn
      </h2>
      <div className={[BurnCardCSS.BurnCard, "p-4"].join(" ")}>
        <div className={BurnCardCSS.warning}>
          <p className="p-2" style={{ color: "white" }}>
            ⚠️ Please note that the image you choose must be an RGB image
          </p>
        </div>
        <label htmlFor="uploadFile" className="p-4" style={{display: show ? 'block' : 'none'}}>
          <img src={Camera} className="p-4" /> <br />
          Drop an image here <br />
          {/* <input
            type="file"
            id="uploadFile"
            ref={imageRef}
            // onChange={ e => setFiles(e.target.value)}
            onChange={() => setFiles(imageRef.current.files[0])}
          /> */}
          <input type="file" id="uploadFile" onChange={onImageChange} className="filetype" />
        </label>

        <div style={{display: show ? 'none' : 'block'}}>
          <img alt="preview image" src={image}/>
        </div>


        <Link 
        to='/watch'
        className={[BurnCardCSS.result, "p-2 mt-2"].join(" ")}
        style={{ display: message === "" ? "none" : "block", textDecoration: 'none'}}>

            {degree !== null && degree !== undefined && message}

        </Link>

        <button className="p-2" onClick={details}>
          Result
        </button>
        
        <div id="myModal" className={BurnCardCSS.modal} style={{display: modal ? 'block' : 'none'}}>
          <div className={BurnCardCSS.modalContent}>
            <span className={BurnCardCSS.close} style={{cursor: 'pointer'}} onClick={() => setModal(false)}>&times;</span>
            <p>{degree}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BurnDegree