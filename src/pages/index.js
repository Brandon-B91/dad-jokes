import React, { useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [isActive, setActive] = useState(false)

  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      "X-RapidAPI-Key": "17fb7de893msh59a82cece7f697ap1c0305jsn0e7db5ca2d76",
    },
  };

  function jokes() {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleToggle = () => [
    setActive(!isActive)
  ]


  return (
    <Layout>
      <main className="full-page">
        <div className="center">
          <cite>Press for the best dad jokes around!</cite>
          <button onClick={() => {jokes(); handleToggle()}}> Get Jokes</button>
          <div className={isActive ? 'card' : null}>
            <h4>{data?.body?.[0]?.setup}</h4>
            <p>{data?.body?.[0].punchline}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
