import React, { Fragment } from "react";
import Header from "../components/header";
import Products_list_intro from "../components/products_list_intro";
import ProductListCard from "../components/productListCard";

export default function testDeCoupleBouchon() {
  return (
    <>
      <Header></Header>
      <div className="title_pill" id="title_pill_bouchon">
        {" "}
        Test de couple pour bouchon{" "}
      </div>
      <div className="main_Body">
        <span className="product_list_headtext">
          {" "}
          Nous proposons une grande variété de testeurs de couple pour bouchon.
        </span>
        <Products_list_intro
          title="TESTEURS DE COUPLE POUR BOUCHON  AU SEIN D’UNE GAMME COMPLÈTE"
          text={<Fragment> Sure Torque développe et produit des couplemètres de fermeture avec une technique de cellule de charge à jauge de contrainte pour l'industrie de l'emballage depuis 1984. <br/>

          Depuis le tout début, Sure Torque a été un créateur de tendances dans son industrie : presque toutes les caractéristiques sophistiquées des tests de couple de fermeture ont été lancées par Sure Torque.</Fragment>}
          url="https://i.postimg.cc/J48SgDwd/image-17.png"
          size={{ height: 256, width: 253 }}
          color ='#E30613'
          ></Products_list_intro>
          
      </div>
    </>
  );
}
