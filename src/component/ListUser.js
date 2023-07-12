import axios from 'axios';
import React from 'react'
import {useState,useEffect } from "react";


function ListUser({maj}) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://127.0.0.1:8000/api/users');
      setData(result.data);
    }
    fetchData();
  }, [maj]);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name} : {item.email}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default ListUser;