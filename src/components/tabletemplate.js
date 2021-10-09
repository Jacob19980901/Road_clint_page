import React from "react";
import "../styles/tabletemplate.css";
import Image from "../assets/not-found.png";

function tabletemplate() {
  return (
    <div className="datatable">
      <h1>Datatable tamplata</h1>

      <div className="template">
        <img src={Image} />
        <div className="information">
          <div className="card name">
            <h3 className="title">Yo'lning nomi</h3>
            <h2 className="subtitle">Olmazor</h2>
          </div>
          <div className="card status">
            <h3 className="title">Yo'lning statusi</h3>
            <h2 className="subtitle">Planning</h2>
          </div>
          <div className="card masofa">
            <h3 className="title">Ta`mirlanayotkan yolni oraliq kilometri</h3>
            <h2 className="subtitle">50-km</h2>
          </div>
          <div className="card start-date">
            <h3 className="title">Ta`mirlash boshlangan sana</h3>
            <h2 className="subtitle">05.05.2021</h2>
          </div>
          <div className="card end-date">
            <h3 className="title">Ta`mirlash tugagan sana</h3>
            <h2 className="subtitle">26.06.2021</h2>
          </div>
          <div className="card money">
            <h3 className="title">Ajratilingan mablag miqdori</h3>
            <h2 className="subtitle">50-mln</h2>
          </div>
          <div className="card save-money">
            <h3 className="title">O'zlashtirilgan mablag miqdori</h3>
            <h2 className="subtitle">30-mln</h2>
          </div>
          <div className="card asset">
            <h3 className="title">Moliya manbai</h3>
            <h2 className="subtitle">Authority</h2>
          </div>
          <div className="card organization">
            <h3 className="title">Vakolatli organ</h3>
            <h2 className="subtitle">Yo'l qurilish</h2>
          </div>
          <div className="card constructor">
            <h3 className="title">Pudratchi</h3>
            <h2 className="subtitle">Murat Building</h2>
          </div>
          <div className="card date">
            <h3 className="title">Tashkil etilgan sana</h3>
            <h2 className="subtitle">10.06.2010</h2>
          </div>
          <div className="card number">
            <h3 className="title">Ishchilar soni</h3>
            <h2 className="subtitle">
              105 <span>ta</span>
            </h2>
          </div>
          <div className="card save">
            <h3 className="title">
              <label for="pass">Saqlas</label>
            </h3>
            <a href="../assets/logo1.png" download>
              Saqlash
            </a>
            {/* <input type="file" allows="pdf" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default tabletemplate;
