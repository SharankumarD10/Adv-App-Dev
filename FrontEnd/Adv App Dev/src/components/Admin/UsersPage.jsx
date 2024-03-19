import React from 'react';
import { Container, Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Sidebar from '../Sidebar';
import './UserPage.css';

const UsersTable = () => {
  // Dummy data for the table
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Tom Brown', email: 'tom@example.com', role: 'user' },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', role: 'admin' },
  ];

  return (
    <>
  <Sidebar/>
    <Container className='contains' maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default UsersTable;
