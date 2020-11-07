import React from "react";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import { GoPerson } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";
function Contact() {
  return (
    <div id="contact">
      <h3 className="contact__title">Contact Us</h3>
      {/* <div className="underline2"></div> */}
      <div className="container contact__content">
        <div className="contact__inputDiv">
          <GoPerson className="contact__icon" />
          <TextField className="contact__input" label="Name" />
        </div>
        <div className="contact__inputDiv">
          <AiFillPhone className="contact__icon" />
          <TextField className="contact__input" label="Number" />
        </div>
        <div className="contact__inputDiv">
          <FaPenNib className="contact__icon" />
          <TextField className="contact__input" label="Title" />
        </div>
        <div className="contact__inputDiv"></div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
          <button className="btn btn-dark contact__btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
