import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Solution3 = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://gorest.co.in/public/v2/users')
      .then((res) => {
        setLoading(false);
        if (res.data) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <Grid style={{ margin: 50 }}>
      <Grid>
        <h4>Question 3</h4>
        Build a React UI to show the list of Users fetched from the API ( Highly
        recommended to use MUI )<br />
        - React Challenge
        <br />- You ahve to use Material UI to display the list of users that
        are fetched from the above API
      </Grid>
      <h4>Solution :</h4>
      {loading ? (
        'Loading...'
      ) : (
        <Grid>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>{' '}
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      )}
    </Grid>
  );
};

export default Solution3;
