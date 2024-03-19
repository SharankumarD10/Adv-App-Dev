import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/NewApplication.css';

function NewApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    panNumber: '',
    addressLine1: '',
    dob: '',
    amount: '',
    duration: '',
    loanType: '',
    collateralDetails: '',
    cropType:'',
    landSize:'',
    requiredMachinery:'',
    agreeToTerms: false,
  });

  const { schemeId, bankid } = useParams();
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here
  };

  return (
    <div className="new-application" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="new-app" style={{ flex: 1, padding: '20px' }}>
        <h1>New Application</h1>
        <form className="new-form" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <h2>Personal Information</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Full Name:</td>
                    <td>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Address Line 1:</td>
                    <td>
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Aadhar Number:</td>
                    <td>
                      <input
                        type="text"
                        name="aadharNumber"
                        value={formData.aadharNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>PAN Number:</td>
                    <td>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ width: '48%' }}>
              <table>
                <tbody>
                  <h2>Loan Details</h2>
                  <tr>
                    <td>Loan Amount:</td>
                    <td>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Loan Duration (months):</td>
                    <td>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Loan Type:</td>
                    <td>
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Loan Type</option>
                        <option value="crop">Crop Loan</option>
                        <option value="land">Land Loan</option>
                        <option value="equipment">Equipment Loan</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Collateral Details:</td>
                    <td>
                      <textarea
                        name="collateralDetails"
                        value={formData.collateralDetails}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Crop Type:</td>
                    <td>
                      <input
                        type="text"
                        name="cropType"
                        value={formData.cropType}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Land Size:</td>
                    <td>
                      <input
                        type="text"
                        name="landSize"
                        value={formData.landSize}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Required Machinery:</td>
                    <td>
                      <input
                        type="text"
                        name="requiredMachinery"
                        value={formData.requiredMachinery}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>Agree to Terms and Conditions:</td>
              </tr>
                
              <button type="submit">
              Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewApplication;
