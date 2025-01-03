import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import { faDisease } from '@fortawesome/free-solid-svg-icons'

const MySidebar = ({ setDepartment }) => {
  return (
    <section className="flex flex-col h-screen bg-limegreen mt-24  text-white flex-2 p-2 ">
      <p className="text-center text-white font-semibold text-2xl mt-20 px-4 leading-normal">
        Suggestions
      </p>
      <div className="flex flex-col ">
        <ul className="flex flex-col text-center text- text-xl mt-2 leading-normal font-semibold">
          <li className="p-2 m-1">
            {" "}
            <button onClick={() => setDepartment("Dermatologist")}>
              Dermatologist
            </button>{" "}
          </li>
          <li className="p-2 m-1">
            {" "}
            <button onClick={() => setDepartment("Oncologist")}>
              Oncologist{" "}
            </button>
          </li>
          <li className="p-2 m-1" onClick={() => setDepartment("Cardiologist")}>
            {" "}
            <button> Cardiologist</button>{" "}
          </li>
          <li className="p-2 m-1" onClick={() => setDepartment("Radiologist")}>
            {" "}
            <button> Radiologist</button>{" "}
          </li>
          <li className="p-2 m-1" onClick={() => setDepartment("Pediatrician")}>
            {" "}
            <button>Pediatrician</button>{" "}
          </li>
          <li className="p-2 m-1" onClick={() => setDepartment("Neurologist")}>
            {" "}
            <button> 
            Neurologist</button>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MySidebar;
