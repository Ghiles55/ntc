import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <>
      <div className="mainHeader">
        <img
          style={{ width: "300px", height: "300px" }}
          src="https://cdn.discordapp.com/attachments/1022933125107548242/1022946802430906490/Logo_Final_Plan_de_travail_1.png"></img>
      </div>
      <div id="headerMenu">
        <Link href="/">
          <button className="menuBtn"> Acceuil</button>
        </Link>

        <button className="menuBtn">Contact</button>
        <Link href="/categories">
          <button className="menuBtn">Catalogue</button>
        </Link>

        <button className="menuBtn">A Propos</button>
        <button className="menuBtn">FAQ</button>
      </div>
    </>
  );
}
