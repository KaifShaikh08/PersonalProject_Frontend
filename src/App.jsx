import React, { useState, useEffect } from "react";
import NamazCard from "./NamazCard";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00008b", // Dark Blue color
    },
  },
});
function App() {
  //useState
  const [mosqueData, setMosqueData] = useState([]);

  const fetchData = async (e) => {
    try {
      const api = "https://sore-crown-hen.cyclic.app";
      const { data } = await axios.get(
        `${api}/getall`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setMosqueData(data.message);
    } catch (error) {
      toast.error("Error Try Again!");
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography color={"white"} variant="h6" component="div">
            Namaz App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {mosqueData.map((mosque, index) => {
          const prayerNames = Object.keys(mosque.PrayerTime); // Get the prayer names
          const prayerTimings = Object.values(mosque.PrayerTime); // Get the prayer timings
          return (
            <NamazCard
              key={index}
              mosqueName={mosque.Masjid}
              address={mosque.Address}
              namazData={prayerNames.map(
                (name, i) => `${name}: ${prayerTimings[i]}`
              )}
            />
          );
        })}
      </Container>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
