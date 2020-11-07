import React from "react";
import AboutCard from "./AboutCard";
import "./Aboutus.css";
import location from "../images/location.svg";
import holiday from "../images/holiday.svg";
import people from "../images/people.svg";

function Aboutus({ fadeleft, faderight }) {
  const reversed = "reversed";
  return (
    <div id="aboutus">
      <h2>About Us</h2>
      <div className="underline"></div>
      <AboutCard
        fade={fadeleft}
        image={people}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris velit. Curabitur sed porttitor diam, non dictum metus. Vivamus in viverra mauris, at lacinia justo. Ut commodo mauris id velit consectetur malesuada. Sed et pharetra nulla. Fusce ultricies sollicitudin tellus commodo posuere. "
        }
        reversed={reversed}
      />
      <AboutCard
        fade={faderight}
        image={holiday}
        text={
          "Mauris et placerat felis. Aenean bibendum turpis mi, nec placerat elit pretium ac. Pellentesque dignissim mi pharetra ex pellentesque, eget pharetra ipsum rutrum."
        }
      />
      <AboutCard
        fade={fadeleft}
        image={location}
        text={
          "Nulla diam ex, cursus vitae ligula eu, volutpat faucibus erat. Maecenas quis leo eu arcu dictum laoreet. Cras malesuada turpis cursus erat porta, vel feugiat massa porta. Maecenas dapibus malesuada finibus. Curabitur lobortis finibus dui eget sagittis. Donec lacus nulla, convallis et sapien id, placerat pellentesque est. Donec a bibendum ligula."
        }
        reversed={reversed}
      />
    </div>
  );
}

export default Aboutus;
