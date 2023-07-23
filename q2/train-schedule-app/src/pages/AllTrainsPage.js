import React, { useState, useEffect } from "react";
import TrainCard from "../components/TrainCard";

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    const fetchTrains = async () => {
      try {
        const response = await fetch("http://20.244.56.144:80/train/trains", {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAxMDExNDIsImNvbXBhbnlOYW1lIjoiVHJhaW4iLCJjbGllbnRJRCI6ImUyZjkzZjc3LTc2ZTctNDUyZi04NzAzLWJjYTY3NGYxZmI4NyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMzcifQ.uRhAhxjwF_yn6Ds6ytGvfEXfjyB-iMXgWInq0KHTZpo`,
          },
        });
        const data = await response.json();
        setTrains(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
