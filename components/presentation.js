import React from "react";

export default function presentation() {
  return (
    <div className="presentationContainer">
      <div id="presentationHeader">
        <h1> Qui sommes nous ?</h1>
        <div id="headerLine"></div>
      </div>
      <div id="presentationBody">
        <div id="presentationText"> 
        <p>
          {" "}
          <span className="underlineText">
            EURL NTC, NEW TECHNOLOGY CONTROL
          </span>{" "}
          est une entreprise d'importation d'équipement de controle qualité dans
          le secteur pharmaceutique et agroalimentaire et cosmétique. Fondée en
          1999, La société est dirigée actuellement par son directeur{" "}
          <span className="underlineText">Touffik Bendekoum</span>
        </p>
        <p>
          {" "}
          <span className="underlineText">
            EURL NTC, NEW TECHNOLOGY CONTROL
          </span>{" "}
          est le distributeur officiel de la marque allemande{" "}
          <span className="underlineText">ERWEKA</span>. Cette Collaboration
          algéro-allemande a pour but de combler le besoin de nos clients en
          leur offrant un large panel de{" "}
          <span className="underlineText">solutions</span> et de{" "}
          <span className="underlineText">produits hauts de gamme</span>
        </p>
        </div>
        <img src="https://cdn.discordapp.com/attachments/1022933125107548242/1022946802430906490/Logo_Final_Plan_de_travail_1.png" />
      </div>
      {/* <div id="presentationFooter">
        
      </div> */}
    </div>
  );
}
