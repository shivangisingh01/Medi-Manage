import { useState } from "react";
import MySidebar from "../components/MySidebar";
import NavBar from "../components/NavBar";
import DocCard from "../components/DocCard";
import {doctors} from "../constants";

function Appointment() {
  const [department, setDepartment] = useState("Dermatologist");
  

  return (
    <>
      <nav className="my-2">
        <NavBar />
      </nav>
      <div className="flex mt-20 gap-4">
        <div className="">
          <MySidebar setDepartment={setDepartment} />
        </div>
        <main className="bg-slate-300 flex-3  min-w-3.5">
          <h1 className="font-bold text-4xl p-5">
            Set Up Your Next Appointment
          </h1>

          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4  gap-14">
            {doctors.filter((doc) => {
             return doc.dept === department;
            }).map((doc) => {
             return <DocCard key={doc.name} {...doc}  />;
            })}
          </div>
          
        </main>
      </div>
    </>
  );
}

export default Appointment;
