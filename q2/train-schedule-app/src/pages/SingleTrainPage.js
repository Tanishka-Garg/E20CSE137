import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch data for the single train from the API and update the state
    const fetchSingleTrain = async () => {
      try {
        const response = await fetch(
          `http://20.244.56.144:80/train/trains/${trainId}`,
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAxMDExNDIsImNvbXBhbnlOYW1lIjoiVHJhaW4iLCJjbGllbnRJRCI6ImUyZjkzZjc3LTc2ZTctNDUyZi04NzAzLWJjYTY3NGYxZmI4NyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMzcifQ.uRhAhxjwF_yn6Ds6ytGvfEXfjyB-iMXgWInq0KHTZpo`,
            },
          }
        );
        const data = await response.json();
        setTrain(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSingleTrain();
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.name}</h1>
      {/* Display detailed train information */}
    </div>
  );
};

export default SingleTrainPage;
