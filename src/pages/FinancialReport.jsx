import React, { useState, useEffect, useContext } from 'react';

const FinancialReport = () => {
  const [patientData, setPatientData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    // Mock data or API call to fetch patient and doctor transaction data
    const fetchData = async () => {
      // Example patient data
      setPatientData([
        { id: 1, name: 'Kavya Sharma', discountApplied: 50, totalAmount: 150, date: '2024-12-30' },
        { id: 2, name: 'Divya Mishra', discountApplied: 30, totalAmount: 120, date: '2024-12-29' },
      ]);
      
      // Example doctor data
      setDoctorData([
        { id: 1, name: 'Dr. Kesari', discountApplied: 40, totalAmount: 200, date: '2024-12-30' },
        { id: 2, name: 'Dr. Malhotra', discountApplied: 20, totalAmount: 180, date: '2024-12-28' },
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Financial Reporting</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Discount Transactions</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Doctor Name</th>
              <th className="py-2 px-4 border-b text-left">Discount Applied ($)</th>
              <th className="py-2 px-4 border-b text-left">Total Amount ($)</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => (
              <tr key={patient.id}>
                <td className="py-2 px-4 border-b">{patient.name}</td>
                <td className="py-2 px-4 border-b">{patient.discountApplied}</td>
                <td className="py-2 px-4 border-b">{patient.totalAmount}</td>
                <td className="py-2 px-4 border-b">{patient.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Regular Transactions</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Doctor Name</th>
              <th className="py-2 px-4 border-b text-left">Discount Applied ($)</th>
              <th className="py-2 px-4 border-b text-left">Total Amount ($)</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor) => (
              <tr key={doctor.id}>
                <td className="py-2 px-4 border-b">{doctor.name}</td>
                <td className="py-2 px-4 border-b">0</td>
                <td className="py-2 px-4 border-b">{doctor.totalAmount}</td>
                <td className="py-2 px-4 border-b">{doctor.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialReport;
