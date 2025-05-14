import React,{useEffect,useState} from "react";
import Navgation from "./NavBar";
import { Link } from "react-router-dom";
import City from "./assets/images/city.jpg";
import "./App.css";
let Homepage = () =>{
   const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

     useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  const x = cities.filter((city) =>
    city.city.toLowerCase().includes(search.toLowerCase())
  );
    return(
         <div>
      <div className="heroimage">
        <img src={City} alt="City" className="herobg" />
        <div className="herocontent">
          <h1>Welcome to DTrip</h1>
          <p className="herosubheading">
            Explore the world with fantastic places to venture around
          </p>
          <input
            className="heroinput"
            placeholder="Search a City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <button id="button">Search</button>
        </div>
      </div>

      <div className="citycontainer">
        {x.map((city) => (
          <div key={city.id} className="citycard">
            <Link to={`/city/${city.city.toLowerCase()}`}>
              <div className="cityimage">
                <img src={city.image} alt={city.city} className="cityimage" />
                <div className="cityname">{city.city}</div>
              </div>
              <div className="cityinfo">
                <p>{city.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Homepage
