import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Solution2 = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const maleActiveUser = users.filter(
    (user) => user.gender == 'male' && user.status == 'active'
  );
  const maleInactiveUser = users.filter(
    (user) => user.gender == 'male' && user.status == 'inactive'
  );
  const femaleActiveUser = users.filter(
    (user) => user.gender == 'female' && user.status == 'active'
  );
  const femaleInactiveUser = users.filter(
    (user) => user.gender == 'female' && user.status == 'inactive'
  );

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
    <div  style={{ margin: 50 }}>
      <h3>Question 2</h3>
      <p>
        Fetch Users Data from Public API and get count of users gender wise in
        both active and inactive status.
        <br />
        - Challenge #2 - https://gorest.co.in/public/v2/users
        <br />
        - We need to check the number of male and female users in both active
        aswell as inactive status
        <br />
        - Using axios for fetching data is always preferred
        <br />
      </p>
      {loading ? (
        'Loading'
      ) : (
        <div>
          <h3>Solution:</h3>
          <h5>No of male active users : {maleActiveUser.length}</h5>
          <h5>No of male inactive users : {maleInactiveUser.length}</h5>
          <h5>No of female active users : {femaleActiveUser.length}</h5>
          <h5>No of female inactive users : {femaleInactiveUser.length}</h5>
        </div>
      )}
    </div>
  );
};

export default Solution2;
