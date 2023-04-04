import React, { useState, useEffect,useContext } from "react";
import requests from 'requests';
import { Image } from "react";
import axios from "axios";
import { UserContext } from "../App";

// const Component = () => {
//   const { state } = useContext(UserContext);
//   console.log(state); // replace "user" with the actual property name you want to access
  
// };

const Home = () => {
  const { state } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [apiData, setApiData] = useState(null);
    const api_key = "vIyDYrcjsuCqL43OTXNdfuELsAbxOKNV9kGRMFsa";

    const url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key;
    console.log(state)
  useEffect(() => {
    axios.get(url).then((res) => {
      setApiData(res.data);
      console.log(apiData);
    });
  });
  // Component()
  // let ua = async () => {
  //   const api_key = "vIyDYrcjsuCqL43OTXNdfuELsAbxOKNV9kGRMFsa";

  //   const url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key;

  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       // setApiData(response.json());
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Do something with the returned data
  //       setApiData(data);
  //       console.log(apiData.hdurl);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem fetching the data:", error);
  //     });
  // }
  // ua();
  const userName = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUser(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userName();
  }, []);

  return (
    <>
      {state && (
        <div>
          {apiData && <p>{apiData.title}</p>}
          {!apiData && (
            <h2>
              There something wrong with api please try later
            </h2>
          )}
          
          {apiData && apiData.hdurl && (
            <img src={apiData.hdurl} alt="Alt text" title={apiData.hdurl} />
          )}
        </div>
      )}
      {!state && (
        <div>
          <h2>Please login first to checkout the image</h2>
        </div>
      )}
    </>
  );
};

export default Home;
