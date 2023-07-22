import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const response = await axios.get('https://api.johndoerailways.com/trains');
      const filteredTrains = response.data.filter(train => new Date(train.departureTime) > new Date(Date.now() + 30*60000));
      const sortedTrains = filteredTrains.sort((a, b) => a.price - b.price || b.tickets - a.tickets || new Date(b.departureTime) - new Date(a.departureTime));
      setTrains(sortedTrains);
    };

    fetchTrains();
  }, []);

  return (
    <div>
      {trains.map(train => (
        <div key={train.id}>
          <Link to={`/train/${train.id}`}>{train.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default TrainList;

