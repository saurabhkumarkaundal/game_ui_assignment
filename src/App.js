import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const MoviesOptions = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "b3e33d382cmshfd9c7ee51f4cd4cp1cf411jsnd7672a929f03",
    },
  };

  useEffect(() => {
    axios
      .request(MoviesOptions)
      .then((response) => {
        console.log(response.data);
        setData(response.data.slice(0, 156));
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  return (
    <div class="main-content">
      <div>
        <Search
          placeholder="Enter Movie Name"
          value={wordEntered}
          setValue={setWordEntered}
        />
      </div>
      <div className="box">
        {data
          .filter(
            (item) =>
              item.title
                .toLowerCase()
                .indexOf(wordEntered.toLowerCase().trim()) >= 0
          )
          .map((items, i) => (
            <div key={i} style={{flex:0.33}}>
              <span>
                <img src={items.thumbnail} alt={items.title}></img>
              </span>
              <br></br>
              <span>{items.title}</span>
              <br></br>
              <span>{items.platform}</span>
              <br></br>
              <span>{items.publisher}</span>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
