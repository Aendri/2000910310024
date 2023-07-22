import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainDetail = ({ match }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      const response = await axios.get(`https://api.johndoerailways.com/trains/${match.params.id}`);
      setTrain(response.data);
    };

    fetchTrain();
  }, [match.params.id]);

  return (
    <div>
      {train && (
        <div>
          <h1>{train.name}</h1>
          <p>Price: {train.price}</p>
          <p>Seats Available: {train.seats}</p>
          <p>Departure Time: {new Date(train.departureTime).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default TrainDetail;
