import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/Loans.css';
import LoanDetails from './LoanDetails';

function Loans() {
  const [userLoans, setUserLoans] = useState([
    {
      id: '1',
      status: 'Approved',
      fullName: 'John Doe',
      amount: '$10,000',
      bank: 'Example Bank',
      applicationDate: '2024-03-18',
    },
    {
      id: '2',
      status: 'Pending',
      fullName: 'Jane Smith',
      amount: '$15,000',
      bank: 'Sample Bank',
      applicationDate: '2024-03-19',
    },
    {
      id: '3',
      status: 'Rejected',
      fullName: 'Alice Johnson',
      amount: '$7,000',
      bank: 'Test Bank',
      applicationDate: '2024-03-20',
    },
  ]);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (loan) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };

  return (
    <div className='loans-container'>
      <Sidebar />
      <div className='loans-content'>
        <h2>Submitted Loan Applications</h2>
        <table className='application-table'>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Status</th>
              <th>Full Name</th>
              <th>Amount</th>
              <th>Bank</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userLoans.map(application => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.status}</td>
                <td>{application.fullName}</td>
                <td>{application.amount}</td>
                <td>{application.bank}</td>
                <td>{application.applicationDate}</td>
                <td>
                  <button onClick={() => handleViewDetails(application)} className='view-button'>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <LoanDetails isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} loan={selectedLoan} />
        
        <div className='button-container'>
          <Link to="/loan-list" className='new-application-button'>New Application</Link>
          <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target='_blank' rel="noopener noreferrer" className='loan-requirements-button'>Apply For new PAN</a>
        </div>
      </div>
    </div>
  );
}

export default Loans;
