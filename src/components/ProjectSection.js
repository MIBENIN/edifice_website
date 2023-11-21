import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";
import "../App.css";
const ProjectSection = () => {
  return (
    <section className="container Project-section" style={{ marginTop: "4em" }}>
      <h2 className="fs-2 text-center fw-bold pb-4 project-title">Projects</h2>
      <div className="row g-3 projects-div">
        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project1}
                alt="project1"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">
                White City Lofts
              </h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project2}
                alt="project2"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">
                Metal Working Plant
              </h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project3}
                alt="project3"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">
                Mcmillan's House
              </h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project4}
                alt="project4"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">
                Child Care Center
              </h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project5}
                alt="project5"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">
                Social Housing
              </h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="position-relative project">
            <div>
              <img
                src={project6}
                alt="project6"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-none project-details">
              <h5 className="text-light fw-bold text-uppercase">City Center</h5>
              <p className="text-light">Professional Construction Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
