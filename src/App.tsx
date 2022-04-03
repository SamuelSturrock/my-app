import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

function App() {

  const clientID = "71922";
  const clientSecret = "3f0f2cd9d0d2a294ba66ff9c83ebde5d82b59746";
  const refreshToken = "your refresh token"
  const auth_link = "https://www.strava.com/oauth/token"
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`


  let params = new URLSearchParams(window.location.search)
  
  const code = params.get("code")
  console.log(code)


  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`)
      ]);

      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data[0]);

    }

    fetchData();
  }, []);
  

  return (

    <h1>hi!</h1>


  );

  }

export default App;
