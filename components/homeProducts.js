import React from "react";

export default function homeProducts() {
  return (
    <div className="H_Products">
      <div className="H_Products_Text">
        <span style={{ fontSize: "40px", color: "#255BFE" }}>Nos produits</span>
        <span>Normes de calibre mondial</span>
      </div>
      <div className="H_Products_Categories">
        <div style={{ margin: "64px 101px 32px 101px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1022933125107548242/1054501788813897728/erweka-logo_1.png"
            style={{ height: 67, width: 369 }}></img>
        </div>
        <div style={{ margin: "64px 101px 32px 101px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1022933125107548242/1054502758931239044/image.png"
            style={{ height: 108, width: 352 }}></img>
        </div>
        <div style={{ margin: "64px 101px 32px 101px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1022933125107548242/1054503430552571944/image.png"
            style={{ height: 183, width: 253 }}></img>
        </div>
      </div>
    </div>
  );
}
