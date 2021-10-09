import React, { useState, useEffect } from "react";
import "../styles/table-comp.css";
import tableComponents from "../components/table-data.json";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Table() {
  let id = 1;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectStatusState, setSelectStatusState] = useState("");

  function search(val) {
    {
      if (searchTerm == "") {
        return val;
      } else {
        if (val.nomi.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.statusi.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.uzunligi.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.boshlangan.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.tugatiladi.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.mablag.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.ozlashtirilgan.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.manbai.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.organ.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.pudratchi.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.sana.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
        if (val.ishchilar.toLowerCase().includes(searchTerm.toLowerCase()))
          return val;
      }
    }
  }
  // qidiruv tizimini tugash

  // selectni filtrlash boshlash
  const handleSelectStatusChange = (e) => {
    const selectStatusState = e.target.value;
    setSelectStatusState(selectStatusState);
    console.log("selectValue: ", selectStatusState);
  };

  function selectFilter(val, statusVal) {
    if (statusVal === "barchasi" || statusVal === "") return val;
    else if (val.statusi.toLowerCase() === statusVal) return val;
  }
  // selectni filtrlash tugatish

  return (
    <div className="bodyTable">
      <div class="tableNav">
        <select
          className="selectStatus"
          name="status"
          onChange={handleSelectStatusChange}
        >
          <option value="default" selected disabled>
            Holatni tanlang
          </option>
          <option value="barchasi">Barchasi</option>
          <option value="ta'mirlanmoqda">Ta'mirlanayotgan yo'llar</option>
          <option value="rejalashtirilmoqda">
            Ta'mirlanishi rejalashtirilgan yo'llar
          </option>
          <option value="tayyor">Ta'mirlanib bo'lgan yo'llar</option>
        </select>
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="searchInp"
          placeholder="Qidiruv..."
        />
      </div>

      <table className="table">
        <tr key={"asos"}>
          <th sort="ars">№</th>
          <th>Ko'cha nomi</th>
          <th>Xolati</th>
          <th>Yo'l uzunligi</th>
          <th>Boshlangan sana</th>
          <th>Tugatilgan sana</th>
          <th>...</th>
          {/* <th>Mablag'</th>
          <th>O'zlahtirilgan mablag'</th>
          <th>Davlat</th>
          <th>Organ</th>
          <th>Tashkilot</th>
          <th>Sana</th>
          <th>Ishchilar soni</th> */}
        </tr>
        {tableComponents
          .filter((val) => selectFilter(val, selectStatusState) && search(val))
          .map((comp) => {
            return (
              <tr className="" key={id++}>
                <td>{id}</td>
                <td>{comp.nomi}</td>
                <td>{comp.statusi}</td>
                <td>{comp.uzunligi}</td>
                <td>{comp.boshlangan}</td>
                <td>{comp.tugatiladi}</td>
                <td>
                  <Link to="/tabletemplate">
                    📝<span class="more">Batafsil...</span>
                  </Link>
                </td>
                {/* <td>{comp.mablag}</td>
                <td>{comp.ozlashtirilgan}</td>
                <td>{comp.manbai}</td>
                <td>{comp.organ}</td>
                <td>{comp.pudratchi}</td>
                <td>{comp.sana}</td>
                <td>{comp.ishchilar}</td> */}
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Table;
