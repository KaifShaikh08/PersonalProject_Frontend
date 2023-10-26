import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  maxWidth: 600,
  maxHeight: 600,
  margin: "10px",
  borderRadius: "10px",
};

const mosqueNameStyle = {
  color: "#1a237e",
  fontWeight: "bold",
  fontSize: "25px",
  textAlign: "center",
};

const namazCardStyle = {
  backgroundColor: "#0d47a1",
  color: "white",
  padding: "14px",
  borderRadius: "10px",
};

const NamazCard = ({ mosqueName, address, namazData }) => {
  return (
    <div style={cardStyle}>
      <Typography variant="h6" style={mosqueNameStyle}>
        {mosqueName}
      </Typography>
      <Typography variant="body2" style={{ textAlign: "center" }}>
        {address}
      </Typography>
      {namazData.map((timing, index) => (
        <Card key={index} style={cardStyle}>
          <CardContent style={namazCardStyle}>
            <Typography>{timing}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NamazCard;
