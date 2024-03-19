import React from 'react';
import '../Styles/LoanDetails.css';

const LoanDetails = ({ isOpen, handleClose }) => {
  const loan = {
    id: '123456',
    status: 'Approved',
    fullName: 'John Doe',
    amount: '$10,000',
    bank: 'Example Bank',
    applicationDate: '2024-03-20',
    dueAmount: '$1,000',
    agriculturalDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const handlePay = () => {
    alert(`Paid due amount of ${loan.dueAmount}`);
  };

  return (
    <>
      {loan !== null ? (
        <>
          <div className={`modal ${isOpen ? 'open' : ''}`} onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="details-header">
                <h2>Loan Details</h2>
                <button className="close" onClick={handleClose}>
                  &times;
                </button>
              </div>
              <div className="body">
                <div>Application ID: {loan.id}</div>
                <div>Status: {loan.status}</div>
                <div>Full Name: {loan.fullName}</div>
                <div>Amount: {loan.amount}</div>
                <div>Bank: {loan.bank}</div>
                <div>Application Date: {loan.applicationDate}</div>
                {loan.status === 'Approved' && <div>Due Amount: {loan.dueAmount}</div>}
                {loan.status === 'Approved' && (
                  <button className="pay-button" onClick={handlePay}>
                    Pay Due Amount
                  </button>
                )}
                <div>Agricultural Loan Specific Detail: {loan.agriculturalDetail}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoanDetails;
