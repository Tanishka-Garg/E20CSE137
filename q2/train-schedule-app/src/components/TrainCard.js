import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TrainCard = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{train.name}</Typography>
        <Typography variant="body1">
          Seats Available (Sleeper): {train.seatsAvailability.sleeper}
        </Typography>
        <Typography variant="body1">
          Seats Available (AC): {train.seatsAvailability.AC}
        </Typography>
        <Typography variant="body1">
          Price (Sleeper): {train.prices.sleeper}
        </Typography>
        <Typography variant="body1">Price (AC): {train.prices.AC}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
