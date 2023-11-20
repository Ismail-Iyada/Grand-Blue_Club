import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 position-relative">
            {/* Main Image */}
            <img src="img/about.jpeg" className="img-responsive" alt="" />

            {/* Small Image in Top Left Corner */}
            <img
              className="small-image-top-left img-fluid"
              src="img/ofppt.jpg"
              alt="Small Image Top Left"
              style={{
                position: "absolute",
                width: "150px", // Adjust the width as needed
                height: "150px", // Adjust the height as needed
                borderRadius: "50%",
                top: 0,
                left: 0,
              }}
            />

            {/* Small Image in Bot Left Corner */}
            <img
              className="small-image-bot-left img-fluid"
              src="img/PIE-LOGO.jpg"
              alt="Small Image Bottom Left"
              style={{
                position: "absolute",
                width: "150px", // Adjust the width as needed
                height: "150px", // Adjust the height as needed
                borderRadius: "50%",
                bottom: 0,
                left: 0,
              }}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{ color: "#44A5E9" }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style" style={{ color: "#44A5E9" }}>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
