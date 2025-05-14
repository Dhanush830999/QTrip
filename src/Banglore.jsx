import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Cities = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [adventures, setAdventures] = useState([]);

  const formattedCity = cityName?.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    fetch(
      `https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=${formattedCity}`
    )
      .then((res) => res.json())
      .then((data) => setAdventures(data))
  }, [cityName]);

  return (
    <div className="adventurelist" style={{ padding: "20px" }}>
      <h2 style={{ color: "black" }}>
        These are the places in {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
      </h2>

      <div className="adventuregrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {adventures.map((res) => (
          <div
            key={res.id}
            className="adventurecard"
            onClick={() => navigate(`/city/${cityName}/adventure/${res.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={res.image}
              alt={res.name}
              className="adventureimg"
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{res.name}</h3>
            <p>Category: {res.category}</p>
            <p>Cost: ₹{res.costPerHead}</p>
            <p>Duration: {res.duration} hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
