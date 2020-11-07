import React from "react";
import "./Gallery.css";

function Gallery({ fadeup }) {
  return (
    <div id="gallery" className="container-fluid">
      <div className="row">
        <div className="col gallery_title">
          <h2>Our Gallery</h2>
          <div className="underline"></div>
        </div>
      </div>
      <div className="row">
        <div data-aos={fadeup} className="col-12 col-sm-4 rooms">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h4>Room I</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            fugiat id atque voluptatem ex distinctio alias, perferendis nisi
            dignissimos eius esse nesciunt, voluptate quae! Repudiandae cum quis
            iste facilis consectetur!
          </p>
          <button className="btn btn-primary">VIEW ROOM DETAILS</button>
        </div>
        <div data-aos={fadeup} className="col-12 col-sm-4 rooms">
          <div
            id="carouselExampleIndicators2"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators2"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators2"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators2"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h4>Room II</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            fugiat id atque voluptatem ex distinctio alias, perferendis nisi
            dignissimos eius esse nesciunt, voluptate quae! Repudiandae cum quis
            iste facilis consectetur!
          </p>
          <button className="btn btn-primary">VIEW ROOM DETAILS</button>
        </div>
        <div data-aos={fadeup} className="col-12 col-sm-4 rooms">
          <div
            id="carouselExampleIndicators3"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators3"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators3"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators3"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators3"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators3"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h4>Room III</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            fugiat id atque voluptatem ex distinctio alias, perferendis nisi
            dignissimos eius esse nesciunt, voluptate quae! Repudiandae cum quis
            iste facilis consectetur!
          </p>
          <button className="btn btn-primary">VIEW ROOM DETAILS</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
