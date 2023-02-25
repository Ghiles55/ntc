import React from "react";
import Categories_cards from "./categories_cards";

export default function homeProducts() {
  return (
    <div className="H_Products">
      <div className="H_Products_Text">
        <span>Nos produits</span>
      </div>
      <div className="H_Products_Categories">
        <div className="H_Products_C_Description">
          {" "}
          <p> Une offre compléte de qualité</p>{" "}
        </div>
        <div className="H_Products_Cells">
          <Categories_cards
            image={{
              url: "https://i.postimg.cc/ht9D6CrW/pillule-Plan-de-travail-1.png",
              height: "200px",
              width: "200px",
            }}
            text="Test d’industrie pharmaceutique"
            link="/test_d'industrie_pharma"></Categories_cards>

          <Categories_cards
            image={{
              url: "https://i.postimg.cc/K8Xc9XtD/Sans-titre-1-Plan-de-travail-1-Plan-de-travail-1.png",
              height: "200px",
              width: "200px",
            }}
            text="Test d’intégrité des filtres"
            link="/test_Filtres"></Categories_cards>
          <Categories_cards
            image={{
              url: "https://i.postimg.cc/wBgqphft/Sans-titre-1-Plan-de-travail-1.png",
              height: "200px",
              width: "200px",
            }}
            text="Test de couple 
pour bouchon"
            link="/testDeCoupleBouchon"></Categories_cards>
          <Categories_cards
            image={{
              url: "https://i.postimg.cc/wTRTcxRB/bottle-Plan-de-travail-1.png'",
              height: "200px",
              width: "200px",
            }}
            text="Poids et masse de précision"
            link="/poids_masses_precision"></Categories_cards>
        </div>
      </div>
    </div>
  );
}
