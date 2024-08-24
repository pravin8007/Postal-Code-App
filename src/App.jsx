import { useState } from 'react';
import axios from 'axios';
import PincodeInput from './components/PincodeInput';
import PostOfficeList from './components/PostOfficeList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  const handleLookup = async () => {
    if (pincode.length !== 6) {
      setError('Pincode must be 6 digits');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = response.data[0];
      console.log(data);
      
      if (data.Status === 'Success') {
        setPostOffices(data.PostOffice);
      } else {
        setError('Error fetching data');
        setPostOffices([]);
      }
    } catch{
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>

      {
        postOffices.length == 0 && (
          <div>
            <h3>Enter Pincode</h3>
            <PincodeInput pincode={pincode} setPincode={setPincode} handleLookup={handleLookup} />
          </div>
        )
      }

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {
        postOffices.length > 0 && (
          <div className='data'>
            <h2>Pincode : {pincode}</h2>
            <PostOfficeList
              postOffices={postOffices}
              filter={filter}
              handleFilterChange={handleFilterChange}
            />
          </div>
        )
      }
    </div>
  );
}

export default App;
