import React, { useState } from "react";
import "./Home.css";
import { BsCameraVideo } from "react-icons/bs";
import Navbar from "../components/Navbar";

function Home({ fadeleft, faderight }) {
  const [video, setVideo] = useState(false);

  return (
    <div id="home" className="home">
      <Navbar />
      {video ? (
        <div className="video">
          <span
            onClick={() => {
              setVideo(false);
              document.getElementById("home__title").style.display = "block";
              document.getElementById("home__video").style.display = "block";
            }}
            className="video_cross"
          >
            X
          </span>
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/dHcuEZCVijA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
      <h1 id="home__title" data-aos={faderight}>
        Temas Resort Hotel
      </h1>
      <button
        id="home__video"
        data-aos={fadeleft}
        onClick={(e) => {
          setVideo(!video);
          e.target.style.display = "none";
          e.target.previousSibling.style.display = "none";
        }}
        className="home__btn mt-3"
      >
        <BsCameraVideo className="home__btn__icon" /> Watch Video
      </button>
    </div>
  );
}

export default Home;
