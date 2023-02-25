import React, { Fragment } from "react";
import Header from "../components/header";
import Products_list_intro from "../components/products_list_intro";
import ProductListCard from "../components/productListCard";

export default function () {
  return (
    <div>
      <Header></Header>
      <div className="title_pill" id="title_pill_filtres">
        {" "}
        Test d’intégrité des filtres{" "}
      </div>
      <span className="product_list_headtext">
        {" "}
        Nous proposons une grande variété de testeurs d’intégrité des filtres
        pour l’industrie pharmaceutique.
      </span>
      <Products_list_intro
        title="Protéger les personnes, les produits et les infrastructures critiques"
        text="Depuis 1961, ATI est le principal concepteur et fabricant d'équipements de test spécialisés pour les filtres à particules à haute efficacité (HEPA), les supports plats, les cartouches filtrantes et les respirateurs utilisés par les organisations gouvernementales, militaires et commerciales du monde entier. Aujourd'hui, ATI continue d'innover en proposant de nouvelles technologies dans le domaine de la détection CBRNE, notamment la détection des menaces biologiques et le test des masques respiratoires militaires."
        url="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        size={{ height: 264, width: 415 }}></Products_list_intro>
      <div className="productCardContainer">
        <ProductListCard
          title="PHOTOMÈTRES ET ACCESSOIRES"
          color="#049F97"
          text={
            <Fragment>
              {" "}
              <span className="productCardTextTitle"> 2I, 2I-N</span>
              <p>
                {" "}
                Le photomètre digital pour aérosols le plus avancé, le plus
                innovant et le plus convivial disponible aujourd'hui, le
                photomètre digital 2i est portable, mais robuste, et
                l'instrument idéal pour les tests d'intégrité des systèmes de
                filtration in-situ. L'iProbe, un scanner à main doté d'un écran
                LCD local et de commandes, permet à l'opérateur de modifier les
                paramètres sans avoir à s'arrêter pour régler l'unité de base,
                ce qui minimise les temps d'arrêt.
              </p>
            </Fragment>
          }></ProductListCard>
        <ProductListCard
          title="GÉNÉRATEURS D'AÉROSOLS ET ACCESSOIRES"
          color="#049F97"
          text={
            <Fragment>
              {" "}
              <span className="productCardTextTitle">
                {" "}
                GÉNÉRATEUR D'AÉROSOLS 4B / 4B LITE LASKIN-NOZZLE
              </span>
              <p>
                {" "}
                The 4B series family of Laskin-Nozzle aerosol generators are
                durable, portable, and reliable. Designed for testing filter
                systems ranging from small glove boxes to large cleanroom
                plenums, ATI Laskin-Nozzle generators provide the ideal solution
                for creating a polydispersed, submicron aerosol to certify and
                qualify in-situ filter systems.
              </p>
              <span className="productCardTextTitle">
                {" "}
                6D LASKIN-NOZZLE AEROSOL GENERATOR
              </span>
              <p>
                {" "}
                Le 6D est un générateur d'aérosol Laskin-Nozzle petit, léger et
                robuste, autonome et portable, avec compresseur intégré. Il est
                idéal pour tester une grande variété de systèmes de filtration
                avec des débits d'air allant jusqu'à 2 000 cfm en générant un
                aérosol submicronique polydispersé. Les applications comprennent
                les postes de travail, les unités de filtration à pression
                négative, les armoires de sécurité biologique, les modules de
                plafond et plus encore. Il peut également être utilisé pour
                tester les systèmes à pression positive à l'aide d'une pompe à
                injection positive (PIP) et d'un kit d'adaptateur de tuyau en
                option.
              </p>
              <span className="productCardTextTitle">
                {" "}
                GÉNÉRATEUR D'AÉROSOLS THERMIQUES 5D
              </span>
              <p>
                {" "}
                Le générateur d'aérosol thermique 5D est conçu pour les
                opérateurs qui ont besoin d'une large gamme de concentrations de
                sortie d'aérosol pour effectuer des tests d'étanchéité sur des
                armoires à air propre plus petites par le biais de systèmes de
                traitement de l'air de salle blanche.
              </p>
            </Fragment>
          }></ProductListCard>
          <ProductListCard
          title="INJECTION ET CONDITIONNEMENT D'AÉROSOLS"
          image={{url : "https://i.postimg.cc/Jzkr7CFy/image-1.png" , height : 29 , width: 140}}
          color="#049F97"
          text={
            <Fragment>
              {" "}
              <span className="productCardTextTitle"> POSITIVE INJECTION PUMP</span>
              <p>
                {" "}
                Injection d'aérosol dans des conduits à pression positive
              </p>
              <span className="productCardTextTitle"> TUYAUX DE BARBOTAGE (KIT)</span>
              <p>
                {" "}
                Mélange d'aérosols sur de courtes distances
Améliore le test des armoires à air pur, des armoires de sécurité, des isolateurs et de tout filtre HEPA installé lorsque la distance entre le point d'injection de l'aérosol et le filtre est courte et que la mesure de provocation en amont montre un mauvais mélange.<br/>

Délivre des aérosols de provocation mélangés de manière homogène à moins d'un mètre de la face du filtre.<br/>
Le kit complet comprend 20 tuyaux avec jusqu'à 5 longueurs différentes, à simple ou double perçage, offrant une extrême flexibilité.
              </p>
              <span className="productCardTextTitle"> DILUEUR D'AÉROSOL</span>
              <p>
                {" "}
                Dilue l'aérosol à des niveaux mesurables pour les compteurs de particules.

Installés entre la source d'aérosol et un compteur de particules, les dilueurs minimisent la chute de pression et la perte d'aérosol tout en empêchant la saturation du compteur de particules.
              </p>
            </Fragment>
          }
          ></ProductListCard>
      </div>
    </div>
  );
}
