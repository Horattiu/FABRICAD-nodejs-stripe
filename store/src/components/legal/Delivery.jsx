import React from "react";
import Navbar from "../Navbar";

function Delivery() {
  return (
    <>
      <Navbar />
      <div className="delivery-container">
        <h1>Politica de expediere</h1>
        <div>
          <h2>DESPRE COMANDA</h2>
          <p>
            1. CUM STIU DACA COMANDA MEA S-A ÎNREGISTRAT? După ce ai plasat
            comanda, îți vom trimite un email de confirmare. Trimitem și
            actualizări pe adresa de email cu care te-ai înregistrat. SFAT: dacă
            ti-ai făcut cont, poți vedea toate actualizările în contul tău, în
            secțiunea "Istoric comenzi"
          </p>
        </div>
      </div>
    </>
  );
}

export default Delivery;
