// Facts.jsx

import React from "react";
// Import du composant de comptage
import CountUp from "react-countup";

export default function Facts() {
  return (
    <div className="container-fluid bg-primary facts py-5 mb-5">
      <div className="container py-5">
        <div className="row gx-5 gy-4">

          {/* Colonne 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div
                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-star fs-4 text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white">Our Experience</h5>
                {/* Utilisation de CountUp pour animer la valeur 12345 */}
                <h1 className="display-5 text-white mb-0">
                  <CountUp end={12345} duration={2} />
                </h1>
              </div>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div
                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-users fs-4 text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white">Farm Specialist</h5>
                <h1 className="display-5 text-white mb-0">
                  <CountUp end={12345} duration={2} />
                </h1>
              </div>
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div
                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-check fs-4 text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white">Complete Project</h5>
                <h1 className="display-5 text-white mb-0">
                  <CountUp end={12345} duration={2} />
                </h1>
              </div>
            </div>
          </div>

          {/* Colonne 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div
                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-mug-hot fs-4 text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white">Happy Clients</h5>
                <h1 className="display-5 text-white mb-0">
                  <CountUp end={12345} duration={2} />
                </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
