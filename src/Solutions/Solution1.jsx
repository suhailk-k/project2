import React, { useState } from 'react';

const Solution1 = () => {
  const newStringofNums = '1,3,545,6767,8,9-9,9994_33$$33,33!334';
  const array = newStringofNums.split(',');
  const newArray = array.filter((item) => parseInt(item) == item);
  const solution = newArray.reduce((a, b) => parseInt(a) + parseInt(b));

  // console.log(solution);
  return (
    <div  style={{ margin: 50 }}>
      <h4>Question 1</h4>
      <p>
        Find the sum of Numbers in a string with Special Characters. <br />
        - const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334"
        <br />- We need a sum of all the numbers
      </p>
      <h4>Solution :</h4>
      {solution}
    </div>
  );
};

export default Solution1;
