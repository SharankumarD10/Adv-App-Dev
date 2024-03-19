import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../Styles/userDash.css';
import { PieChart as MUIPieChart } from '@mui/x-charts/PieChart'; 

function UserDashboard() {
  const [userLoans] = useState([
    { id: 1, loanType: 'Crop Loan', amount: 20000, status: 'Paid' },
    { id: 2, loanType: 'Equipment Loan', amount: 30000, status: 'Pending' },
    // Add more dummy data as needed
  ]);

  const [user] = useState({
    fullName: 'Amit Kumar',
    email: 'amit.kumar@example.com',
    phoneNumber: '123-456-7890',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [loansPerPage] = useState(5);

  const navtoLoan = () => {
    // Handle navigation to new loan application page
  };

  const handleViewDetails = (loan) => {
    // Handle viewing details of a specific loan
    console.log('View details of loan:', loan);
  };

  // Pagination
  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = userLoans.slice(indexOfFirstLoan, indexOfLastLoan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Prepare data for MUI PieChart
  const paidLoans = userLoans.filter(loan => loan.status === 'Paid');
  const remainingLoans = userLoans.filter(loan => loan.status !== 'Paid');
  const pieChartData = [
    { title: 'Paid', value: paidLoans.length, color: '#4CAF50' },
    { title: 'Remaining', value: remainingLoans.length, color: '#f44336' },
  ];

  return (
    <div className='user-dash'>
      <Sidebar />
      <div className='user-dashboard'>
        <div className='top'>
          <h3 className='hello-user'>
            {user ? `Hello ${user.fullName}! 👋` : ''}
          </h3>
          <button className='new-loan-button' onClick={navtoLoan}>Apply for New Loan</button>
        </div>
        <div className='overview'>
          <div className='total'>
            <img src='https://thumbs.dreamstime.com/b/icon-loan-borrow-loan-253393673.jpg' alt='Loan Icon' />
            <h3>Total Amount Borrowed</h3>
            <h4>₹{userLoans.reduce((acc, loan) => acc + loan.amount, 0)}</h4>
          </div>
          <div className='total'>
            <img src='https://cdn-icons-png.flaticon.com/512/314/314420.png' alt='Repayments Icon' />
            <h3>Total Number of Repayments Done</h3>
            <h4>{paidLoans.length}</h4>
          </div>
          <div className='total'>
            <img src='https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-package-pending-icon-for-your-project-png-image_1599195.jpg' alt='Pending Icon' />
            <h3>Total Number of Repayments Pending</h3>
            <h4>{remainingLoans.length}</h4>
          </div>
          <div className='total'>
            <img src='https://png.pngtree.com/element_our/png/20181227/report-vector-icon-png_295013.jpg' alt='Report Icon' />
            <h3>Detailed Report</h3>
            <button className='detailed-report-button'>View Report</button>
          </div>
        </div>
        <div className='user-details'>
          <div className='flex'>
            <h2>Total Loans</h2>
            <div className='total-loans'>
              {currentLoans.map(loan => (
                <div className='user-loan' key={loan.id}>
                  <div className='loan-details'>
                    <h4>Loan ID: {loan.id}</h4>
                    <h4>Status: {loan.status}</h4>
                  </div>
                  <div className='loan-details'>
                    <h4>Loan Type: {loan.loanType}</h4>
                    <h4>Amount: ₹{loan.amount}</h4>
                  </div>
                  <button className='view-details-button' onClick={() => handleViewDetails(loan)}>View Details</button>
                </div>
              ))}
            </div>
            <div className='notification'>
              <h2>Notifications</h2>
              <ul>
                <li>Please update your Documents</li>
                <li>Please check your Profile</li>
                <li>Keep Tracking your Application</li>
              </ul>
            </div>
            <ul className='pagination'>
              {userLoans.length > loansPerPage &&
                [...Array(Math.ceil(userLoans.length / loansPerPage))].map((_, index) => (
                  <li key={index} className='page-item'>
                    <button onClick={() => paginate(index + 1)} className='page-link'>
                      {index + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
