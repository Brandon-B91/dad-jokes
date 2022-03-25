import React, { useState } from "react";
import Layout from "../Components/Layout";
import axios from 'axios'

const IndexPage = () => {
  const [data, getData] = useState([])

  const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      'X-RapidAPI-Key': '17fb7de893msh59a82cece7f697ap1c0305jsn0e7db5ca2d76'
    }
  };
  
  function jokes() {
    axios.request(options).then((res) =>  {
      console.log(res.data);
      const data = res.data
      getData(data)
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <Layout>
      <main className="full-page">
        <div className="center">
          <cite>Press for the best dad jokes around!</cite>
          <button onClick={jokes}> Get Jokes</button>

          <h4>{data.body[0].setup}</h4>
          <p>{data.body[0].punchline}</p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
