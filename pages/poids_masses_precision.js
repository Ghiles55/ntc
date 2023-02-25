import React from 'react'
import Header from "../components/header";
import Products_list_intro from "../components/products_list_intro";
import ProductListCard from "../components/productListCard";

export default function () {
  return (
    <>
<Header></Header>
      <div className="title_pill" id="title_pill_poids">
        {" "}
        Poids et masse de précision{" "}
      </div>
     
        <span className="product_list_headtext">
          {" "}
          Nous proposons une grande variété Poids et masse de précision
        </span>
        <Products_list_intro
          title="UNE GAMME COMPLÈTE DE POIDS ET MASSE DE PRECISION"
          text="Deux siècles d’expérience ont forgé la savoir-faire de Zwiebel, qui aujourd’hui se présente comme l’un des leaders mondiaux de poids et masses de précision.
          Preuve de notre engagement, notre maîtrise technique et notre capacité d’adaptation nous permettent de répondre à tous les types de demandes.
          Spécialiste dans notre domaine, nous maitrisons au sein de notre site tous les stades de la fabrication de nos poids, de la sélection des matières premières à leur expédition.
          Zwiebel bénéficie de longue date d’un savoir-faire industriel. Nos équipes sont continuellement formées aux exigences et attentes du marché.
          En découle une structure souple et dynamique, un goût du travail bien fait et un état d’esprit artisanal allié aux techniques modernes et technologies de pointes."
          url="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
          size={{ height: 264, width: 415 }}></Products_list_intro>

    </>
  )
}
