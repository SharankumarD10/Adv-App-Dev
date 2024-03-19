import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/LoanList.css';

const LoanExplorer = () => {
  const [banks, setBanks] = useState([
    {
      id: 1,
      name: 'Example Bank',
      schemes: [
        {
          id: 1,
          schemeName: 'Crop Loan Scheme',
          interestRate: '8%',
          maximumLoanAmount: '$50,000',
          description: 'This scheme provides financial assistance to farmers for crop cultivation.',
          eligibilityCriteria: 'Farmers with agricultural land are eligible.',
        },
        {
          id: 2,
          schemeName: 'Home Loan Scheme',
          interestRate: '6.5%',
          maximumLoanAmount: '$300,000',
          description: 'This scheme provides loans for purchasing or constructing a home.',
          eligibilityCriteria: 'Individuals with a stable source of income are eligible.',
        },
      ],
    },
    {
      id: 2,
      name: 'Sample Bank',
      schemes: [
        {
          id: 3,
          schemeName: 'Personal Loan Scheme',
          interestRate: '10%',
          maximumLoanAmount: '$20,000',
          description: 'This scheme provides personal loans for various purposes.',
          eligibilityCriteria: 'Individuals with a good credit score are eligible.',
        },
      ],
    },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="loan-list" style={{ display: 'flex', marginTop: '70px' }}>
      <Sidebar />
      <div className="loan-explorer-container" style={{ flex: 1, padding: '20px' }}>
        <h1>Loan Explorer</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bank</TableCell>
                <TableCell>Scheme Name</TableCell>
                <TableCell>Interest Rate</TableCell>
                <TableCell>Maximum Loan Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Eligibility Criteria</TableCell>
                <TableCell>Apply Now</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? banks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : banks
              ).map((bank) => (
                bank.schemes.map((scheme) => (
                  <TableRow key={scheme.id}>
                    <TableCell>{bank.name}</TableCell>
                    <TableCell>{scheme.schemeName}</TableCell>
                    <TableCell>{scheme.interestRate}</TableCell>
                    <TableCell>{scheme.maximumLoanAmount}</TableCell>
                    <TableCell>{scheme.description}</TableCell>
                    <TableCell>{scheme.eligibilityCriteria}</TableCell>
                    <TableCell>
                      <Link to={`/new-application/${bank.id}/${scheme.id}`}>Apply Now</Link>
                    </TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={banks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default LoanExplorer;
