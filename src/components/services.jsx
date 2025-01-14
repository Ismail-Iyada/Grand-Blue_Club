import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          {/* <h2>Our Activities</h2> */}
          <h2>Nos Activités</h2>
          {/* <p>
          Empower your journey with Grand Blue Club: where coding meets collaboration, tech innovation thrives, and professional development unfolds.
          </p> */}
          <p>
            Autonomisez votre parcours avec le Grand Blue Club : là où le codage
            rencontre la collaboration, l'innovation technologique prospère et
            le développement professionnel se déploie.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
