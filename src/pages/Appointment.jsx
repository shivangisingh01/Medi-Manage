import { useState } from "react";
import MySidebar from "../components/MySidebar";
import NavBar from "../components/Navbar";
import DocCard from "../components/DocCard";
import {doctors} from "../constants/index";

function Appointment() {
  const [department, setDepartment] = useState("Dermatologist");
  

  return (
    <>
        <NavBar />
      
      <div className="bg-[#F4F2EE] flex gap-4">
        <div className="">
          <MySidebar setDepartment={setDepartment} />
        </div>
        <main className="mt-20 flex-3 h-4/5 min-w-3.5">
          <h1 className="font-bold text-4xl p-5 text-green">
            Set Up Your Next Appointment
          </h1>

          <div className="mx-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4  gap-14">
            {doctors.filter((doc) => {
             return doc.dept === department;
            }).map((doc) => {
             return <DocCard key={doc.docId} {...doc}  />;
            })}
          </div>
          
        </main>
      </div>
    </>
  );
}

export default Appointment;
