import React from 'react';

const PincodeInput = ({ pincode, setPincode, handleLookup }) => {
  return (
    <div className='form'>
      <input
        type="text"
        placeholder="Enter 6-digit pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button onClick={handleLookup} >Lookup</button>
    </div>
  );
};

export default PincodeInput;
