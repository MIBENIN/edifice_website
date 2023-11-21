import "../App.css";
import about_image from "../assets/images/about.jpg";
import approach_icon from "../assets/images/approach.svg";
import solution_icon from "../assets/images/solution.svg";
import team_icon from "../assets/images/team.svg";
const AboutSection = () => {
  return (
    <section className="container" style={{ marginTop: "4em" }}>
      <h2 className="fs-2 text-center fw-bold pb-4 about-title">About</h2>
      <div className="row g-5">
        <div className="col-lg-6">
          <p>
            For over 30 years, commitment to our Core Values has made Edifice
            Construction Company the ideal building partner for the region’s
            most forward-thinking organizations. Our success comes from a
            steadfast commitment to the client’s vision and a culture of
            balance, integrity, leadership, and dedication to our customers.
          </p>
          <div style={{ marginLeft: "1.3em" }}>
            <div className="d-flex gap-3 mt-5">
              <div>
                <img src={approach_icon} alt="" />
              </div>
              <div>
                <h3 className="about-sub-title">Professional Approach</h3>
                <p>
                  Our approach to building sustainable facilities is based on
                  high professionalism and delivering projects with fairness and
                  excellence.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mt-5">
              <div>
                <img src={team_icon} alt="" />
              </div>
              <div>
                <h3 className="about-sub-title">Expert team</h3>
                <p>
                  We employ the best experts in construction that make our every
                  project a reliable one. You can trust each member of Edifice
                  team.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mt-5">
              <div>
                <img src={solution_icon} alt="" />
              </div>
              <div>
                <h3 className="about-sub-title">Best solutions</h3>
                <p>
                  Our company offers top-notch construction solutions to
                  corporate and individual clients worldwide, while also
                  covering their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={about_image} alt="about-image" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
