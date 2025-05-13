import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App"

const AdventureDetail = () => {
  const { adventureId, cityName } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(
      `https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${adventureId}`
    )
      .then((res) => res.json())
      .then((data) => setAdventure(data));
  }, [adventureId]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (adventure?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % adventure.images.length);
      }, 3000); // 3 seconds

      return () => clearInterval(interval); // cleanup
    }
  }, [adventure]);

  if (!adventure) return <div>Loading...</div>;

  return (
    <div className="adventure-container">
      <h2>{adventure.name}</h2>

      {/* Image Carousel */}
      <div className="carousel">
        {adventure.images && adventure.images.length > 0 && (
          <img
            src={adventure.images[currentIndex]}
            alt={`Adventure ${currentIndex + 1}`}
            className="carousel-image"
          />
        )}
        <div className="carousel-dots">
          {adventure.images?.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      <p><strong>City:</strong> {cityName}</p>
      <p><strong>Description:</strong> {adventure.content}</p>
    </div>
  );
};

export default AdventureDetail;
