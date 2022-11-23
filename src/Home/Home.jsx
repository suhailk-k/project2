import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Solution1 from '../Solutions/Solution1';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: 50 }}>
      <p>
        1) Find the sum of Numbers in a string with Special Characters.
        <br />
        - const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334"
        <br />- We need a sum of all the numbers
      </p>
      <Button variant='contained' onClick={() => navigate('/question1')}>
        Solution
      </Button>
      <p>
        2) Fetch Users Data from Public API and get count of users gender wise
        in both active and inactive status.
        <br />
        Challenge #2 - https://gorest.co.in/public/v2/users
        <br />
        - We need to check the number of male and female users in both active
        aswell as inactive status
        <br />
        - Using axios for fetching data is always preferred
        <br />
      </p>
      <Button variant='contained' onClick={() => navigate('/question2')}>Solution</Button>
      <p>
        3) Build a React UI to show the list of Users fetched from the API (
        Highly recommended to use MUI )<br />
        - React Challenge
        <br />- You ahve to use Material UI to display the list of users that
        are fetched from the above API
      </p>
      <Button variant='contained' onClick={() => navigate('/question3')}>Solution</Button>
    </div>
  );
};

export default Home;
