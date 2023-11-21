import "../App.css";
import goodwork from "../assets/images/good_work.jpg";
import construction from "../assets/images/relaible_contruction.jpg";
import professionals from "../assets/images/engineeing_professionals.jpg";
import engineeing_professionals_small from "../assets/images/engineeing_professionals_small.jpg";
import construction_small from "../assets/images/relaible_contruction_small.jpg";
import goodwork_small from "../assets/images/good_work_small.jpg";

const HeroSection = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-5">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <picture>
            <source media="(min-width: 768px)" srcset={construction} />
            <img
              src={construction_small}
              className="d-block opacity-50 carousel-image"
              alt="construction"
            />
          </picture>

          <div className="carousel-caption ">
            <div>
              <h5 className="fw-bolder text-dark text-uppercase carousel-title">
                Reliable Construction Services
              </h5>
              <p className="fw-bold text-black-50 text-uppercase carousel-desc">
                Edifice creates and implements sustainable construction projects
                for you.
              </p>
              <div className="hero-btn-div ">
                <a href="" class="hero-cta services-cta">
                  See Services
                </a>
                <a href="" className="hero-cta contact-us-cta">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source media="(min-width: 768px)" srcset={professionals} />
            <img
              src={engineeing_professionals_small}
              className="d-block opacity-75 carousel-image"
              alt="professionals"
            />
          </picture>

          <div className="carousel-caption">
            <div>
              <h5 className="fw-bolder text-dark text-uppercase carousel-title">
                Edifice
              </h5>
              <p className="fw-bold text-black-50 text-uppercase carousel-desc">
                Experienced Construction Professionals
              </p>
              <div className="hero-btn-div">
                <a href="" class="hero-cta services-cta">
                  See Services
                </a>
                <a href="" className="hero-cta contact-us-cta">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <picture>
            <source media="(min-width: 768px)" srcset={goodwork} />
            <img
              src={goodwork_small}
              className="d-block opacity-75 carousel-image"
              alt="goodwork"
            />
          </picture>

          <div className="carousel-caption carousel-caption-contact">
            <div>
              <p className="fw-bold text-dark text-uppercase carousel-title">
                We can handle the most ambitious projects
              </p>
              <div className="hero-btn-div hero-btn-div-contact">
                <a href="" className="hero-cta contact-us-cta">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
