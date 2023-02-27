import React, { Fragment } from "react";
import Header from "../components/header";
import Products_list_intro from "../components/products_list_intro";
import ProductListCard from "../components/productListCard";

export default function categories() {
  return (
    <>
      <Header></Header>
      <div className="title_pill" id="title_pill_pharma">
        {" "}
        Test d'industrie pharmaceutique{" "}
      </div>
      <div className="main_Body">
        <span className="product_list_headtext">
          {" "}
          Nous proposons une grande variété de testeurs pour l’industrie
          pharmaceutique.
        </span>
        <Products_list_intro
          title="TESTEURS DE HAUTE TECHNOLOGIE AU SEIN D’UNE GAMME COMPLÈTE"
          text="Depuis 1951, la société allemande ERWEKA fabrique des testeurs pour l’industrie pharmaceutique.
Reconnu internationalement , ERWEKA propose un produit pour chaque test de la pharmacopée 100% conforme USP/EP/JP.
De nombreux laboratoires et universités à travers le monde sont équipés d’appareils ERWEKA. En outre des testeurs de pharmacopée, ERWEKA dispose également d’une gamme astucieuse d’appareils à usage multiple et une grande variété de testeurs de dissolution."
          url="https://i.postimg.cc/fRzsqY8B/erweka-logo-1.png"
          size={{ height: 68, width: 370 }}></Products_list_intro>
        <div className="productCardContainer">
          {/* <div className="productCard">
              <div className="productCardContents">
                <div className="productCardHead"> TESTEUR DE DÉSINTÉGRATION SÉRIE ZT</div>
                <div className="productCardText">
                  <span>
                    <span className="productCardTextTitle">      La série ERWEKA ZT 121/122 light</span>
                    <ul>
                      <li> Testeur de désintégration d’entrée de gamme idéal</li>
                      <li> Une ou deux stations de test</li>
                    </ul>
                    <span className="productCardTextTitle">      La série ZT 330</span>
                    <ul>
                      <li>Testeur de désintégration automatique</li>
                      <li> Nouveaux paniers sans fils, connexion facile et étanche</li>
                      <li> Interface tactile conviviale avec guide</li>
                      <li> Une ou deux stations de tests</li>
                    </ul>
                    <span className="productCardTextTitle">      La série ZT 720</span>
                    <ul>
                      <li>La nouvelle génération de testeurs de désintégration entièrement automatisée</li>
                      <li>Interface tactile</li>
                      <li>Une ou deux stations de test</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className="productCardImg">

              </div>
            </div> */}
          <ProductListCard
            title="TESTEUR DE DÉSINTÉGRATION SÉRIE ZT"
            text={
              <Fragment>
                <span>
                  <span className="productCardTextTitle">
                    {" "}
                    La série ERWEKA ZT 121/122 light
                  </span>
                  <ul>
                    <li> Testeur de désintégration d’entrée de gamme idéal</li>
                    <li> Une ou deux stations de test</li>
                  </ul>
                  <span className="productCardTextTitle"> La série ZT 330</span>
                  <ul>
                    <li>Testeur de désintégration automatique</li>
                    <li>
                      {" "}
                      Nouveaux paniers sans fils, connexion facile et étanche
                    </li>
                    <li> Interface tactile conviviale avec guide</li>
                    <li> Une ou deux stations de tests</li>
                  </ul>
                  <span className="productCardTextTitle"> La série ZT 720</span>
                  <ul>
                    <li>
                      La nouvelle génération de testeurs de désintégration
                      entièrement automatisée
                    </li>
                    <li>Interface tactile</li>
                    <li>Une ou deux stations de test</li>
                  </ul>
                </span>
              </Fragment>
            }></ProductListCard>
          <ProductListCard
            title="TESTEUR DE DURETÉ SERIE TBH"
            text={
              <p>
                Appareil de base pour les essais manuels de dureté des
                comprimés, dureté/diamètre ou dureté/diamètre/épaisseur.
                <br /> <br /> Le TBH 325 est le testeur de dureté combiné avec
                mémoire produit intégrée pour un maximum de 50 produits.
                <br />
                <br /> La série TBH 425 avec testeurs de dureté
                semi-automatiques et testeurs combinés est livrée avec un
                magasin intégré en forme d’étoile pour tester jusqu’à 10
                échantillons.
              </p>
            }></ProductListCard>
          <ProductListCard
            title="TESTEUR DE DURETÉ EASYCHECK"
            text={
              <Fragment>
                {" "}
                <span className="productCardTextTitle">
                  {" "}
                  Testeur combiné automatique pour tester jusqu’à 5 paramètres.
                </span>
                <ul>
                  <li>
                    {" "}
                    Poids, diamètre, longueur/largeur, épaisseur et dureté
                  </li>
                  <li> 100% conforme USP/EP/JP</li>
                  <li> Carrousel d’alimentation à 20 compartiments</li>
                  <li> Paramètrage convivial par écran tactile en couleur</li>
                  <li> Stockage jusqu’à 100 produits/méthodes</li>
                  <li>
                    {" "}
                    Mémoire pour stockage jusqu’à 1 Mo de résultats de test
                  </li>
                  <li> Possibilité d’export de données / Logiciel MC.Net</li>
                </ul>
              </Fragment>
            }></ProductListCard>
          <ProductListCard
            title="TESTEUR DE DURETÉ MULTI CHECK 6"
            text={
              <Fragment>
                {" "}
                <span className="productCardTextTitle">
                  {" "}
                  Testeur combiné entièrement automatisé nouvelle génération,
                  pour tester
                </span>
                <ul>
                  <li>
                    jusqu’à 5 paramètres poids, diamètre, longueur/largeur,
                    épaisseur et dureté.
                  </li>
                  <li>100% conforme USP/EP/JP.</li>
                  <li>Paramétrage et affichage sur écran tactile couleur.</li>
                  <li>Affichage de courbe de dureté.</li>
                  <li>Ports : LAN, USB A, USB B et fente pour cartes SD.</li>
                  <li>
                    Port Ethernet pour intégration dans réseaux existants.
                  </li>
                  <li>
                    Stockage par défaut jusqu’à 100 produits / 1 Mo de résultats
                    de tests.{" "}
                  </li>
                  <li>Magazine de stockage pour échantillons</li>
                </ul>
              </Fragment>
            }>
            {" "}
          </ProductListCard>
          <ProductListCard
            title="TESTEUR DE VIDE POUR BLISTER VDT/S"
            text={
              <p>
                Le VDT/S est un testeur d’étanchéité sous vide pour blisters et
                autres formes d’emballage. Le vide maximum (plage de pression
                absolue jusqu’à 100 mbar) et le temps de maintien du vide avant
                relâchement peuvent être facilement réglés à l’aide du clavier.
                Le vide actuel est affiché en permanence sur l’écran LED. Les
                paramètres de test tels que la valeur réelle/réglée du vide et
                le temps de maintien peuvent être simplement documentés via une
                interface usb ou une imprimante connectée.
              </p>
            }>
            {" "}
          </ProductListCard>
          <ProductListCard
            title="TESTEUR DE DENSITÉ TASSÉE SVMII"
            text={
              <p>
                Le testeur de densité tassée ERWEKA SVMII a été conçue pour
                mesurer le volume et la masse volumique des poudres et granulés.
                L’appareil est facilement paramétrable grâce à son écran tactile
                en couleur. Il est possible de changer rapidement entre la
                méthode USP 1 et la méthode USP 2 à l’aide de simples plaques
                d’échange. L’appareil est disponible avec une ou deux stations
                de mesure.
              </p>
            }>
            {" "}
          </ProductListCard>
          <ProductListCard
            title="TESTEUR DE GRANULÉS ET POUDRES GT/GTL/GTB"
            text={
              <p>
                Testeur pour la détermination du temps d’écoulement des
                échantillons de poudres/granulés pré-pesé ou avec un volume
                prédéfini.
              </p>
            }>
            {" "}
          </ProductListCard>
          <ProductListCard
            title="TESTEURS DE SUPPOSITOIRE"
            text={
              <p>
                L’ERWEKA ST 35 a été conçue pour déterminer le temps de
                désintégration des suppositoires. L’ERWEKA SBT 2 permet de
                tester la dureté sous laquelle les suppositoires se rompent.
                L’ERWEKA SSP mesure le point de fusion des échantillons de
                suppositoires.
              </p>
            }>
            {" "}
          </ProductListCard>
        </div>
      </div>
    </>
  );
}
