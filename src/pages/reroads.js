// // // import React from "react";
// // // import "../styles/reroading.css";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import DataTable from "react-data-table-component";

// // // // roads
// // // // const tablaCampeones = [
// // // //   {
// // // //     nomi: "Aviasozlar",
// // // //     statusi: "ta'mirda",
// // // //     uzunligi: "5.5km",
// // // //     boshlangan: "12.12.12",
// // // //     tigatiladi: "12.01.13",
// // // //     mablag: "6mln",
// // // //     ozlashtirilgan: "10ml",
// // // //     manbai: "Davlat",
// // // //     organ: "Yo'l qurilishi",
// // // //     pudratchi: "Murat Buildings",
// // // //     sana: "12.12.11",
// // // //     ishchilar: "56ta",
// // // //   },
// // // //   {
// // // //     nomi: "Aviasozlar",
// // // //     statusi: "ta'mirda",
// // // //     uzunligi: "5.5km",
// // // //     boshlangan: "12.12.12",
// // // //     tigatiladi: "12.01.13",
// // // //     mablag: "6mln",
// // // //     ozlashtirilgan: "10ml",
// // // //     manbai: "Davlat",
// // // //     organ: "Yo'l qurilishi",
// // // //     pudratchi: "Murat Buildings",
// // // //     sana: "12.12.11",
// // // //     ishchilar: "56ta",
// // // //   },

// // // //   {
// // // //     nomi: 1,
// // // //     statusi: "2000",
// // // //     uzunligi: "Name company1",
// // // //     boshlangan: "Company1",
// // // //     tigatiladi: "Company1",
// // // //     mablag: "Company1",
// // // //     ozlashtirilgan: "Company1",
// // // //     manbai: "Company1",
// // // //     organ: "Company1",
// // // //     pudratchi: "Company1",
// // // //     sana: "Company1",
// // // //     ishchilar: "Company1",
// // // //   },
// // // //   {
// // // //     nomi: 1,
// // // //     statusi: "2000",
// // // //     uzunligi: "Name company1",
// // // //     boshlangan: "Company1",
// // // //     tigatiladi: "Company1",
// // // //     mablag: "Company1",
// // // //     ozlashtirilgan: "Company1",
// // // //     manbai: "Company1",
// // // //     organ: "Company1",
// // // //     pudratchi: "Company1",
// // // //     sana: "Company1",
// // // //     ishchilar: "Company1",
// // // //   },
// // // // ];

// // // // end roads

// // // // const columns = [
// // // //   {
// // // //     name: "Yo'l Nomi",
// // // //     selector: "nomi",
// // // //     sortable: true,
// // // //   },
// // // //   {
// // // //     name: "Status",
// // // //     selector: "statusi",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Yo'l oraliq masofasi",
// // // //     selector: "uzunligi",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Boshlangan sana",
// // // //     selector: "boshlangan",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //     //  right: true,
// // // //   },
// // // //   {
// // // //     name: "Tugatiladigan sana",
// // // //     selector: "tigatiladi",
// // // //     sortable: true,
// // // //     //  grow: 3,
// // // //   },
// // // //   {
// // // //     name: "Ajratilgan mablag",
// // // //     selector: "mablag",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "O'zlashtirilgan mablag'",
// // // //     selector: "ozlashtirilgan",
// // // //     sortable: true,
// // // //     //  grow: 3,
// // // //   },
// // // //   {
// // // //     name: "Moliya manbai",
// // // //     selector: "manbai",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Vakolatli organ",
// // // //     selector: "organ",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Pudratchi",
// // // //     selector: "pudratchi",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Tashkil etilgan sana",
// // // //     selector: "sana",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   {
// // // //     name: "Ishchilar soni",
// // // //     selector: "ishchilar",
// // // //     sortable: true,
// // // //     //  grow: 2,
// // // //   },
// // // //   // {
// // // //   //   name: "Subcampeon",
// // // //   //   selector: "subcampeon",
// // // //   //   sortable: true,
// // // //   // },
// // // // ];

// // // // const paginationOptions = {
// // // //   rowsPerPageText: false,
// // // //   rangeSeparatorText: "dan",
// // // //   selectAllRowsItem: true,
// // // //   selectAllRowsItemText: "Barchasi",
// // // // };

// // // // const searching = {
// // // //   searching: true,
// // // // };

// // // function reroads() {
// // //   return (
// // //     <div>
// // //       <h1>Ta'mirlanayotgan yo'llar</h1>
// // //     </div>
// // //     //  <div className="table-responsive reroading">
// // //     //    <DataTable
// // //     //      columns={columns}
// // //     //      data={tablaCampeones}
// // //     //      title="Ta'mirlanayotgan yo'llar ro'yxati"
// // //     //      searching={searching}
// // //     //      pagination
// // //     //      paginationComponentOptions={paginationOptions}
// // //     //      fixedHeader
// // //     //      fixedHeaderScrollHeight="600px"
// // //     //    />
// // //     //  </div>
// // //   );
// // // }

// // // export default reroads;

// // import React, { useState } from "react";
// // import "../styles/reroading.css";
// // // import DataTable from "react-data-table-component";

// // function CreateTable() {
// //   const tablaCampeones = [
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "5.5km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "TFK",
// //       sana: "01.01.2000",
// //       ishchilar: "100ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "5.5km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "100mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "5.5km",
// //       boshlangan: "01.01.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "5ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "5.5km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.02.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "10km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "5.5km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Aviasozlar",
// //       statusi: "ta'mirda",
// //       uzunligi: "10km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //     {
// //       nomi: "Faryozbek",
// //       statusi: "tugadi",
// //       uzunligi: "5.5km",
// //       boshlangan: "12.12.12",
// //       tugatiladi: "12.01.13",
// //       mablag: "6mln",
// //       ozlashtirilgan: "10ml",
// //       manbai: "Davlat",
// //       organ: "Yo'l qurilishi",
// //       pudratchi: "Murat Buildings",
// //       sana: "12.12.11",
// //       ishchilar: "56ta",
// //     },
// //   ];
// //   let id = 1;

// //   const [searchTerm, setSearchTerm] = useState("");
// //   function search(val) {
// //     {
// //       if (searchTerm == "") {
// //         return val;
// //       } else {
// //         if (val.nomi.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.statusi.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.uzunligi.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.boshlangan.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.tugatiladi.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.mablag.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.ozlashtirilgan.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.manbai.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.organ.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.pudratchi.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.sana.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //         if (val.ishchilar.toLowerCase().includes(searchTerm.toLowerCase()))
// //           return val;
// //       }
// //     }
// //   }
// //   //   const paginationOptions = {
// //   //     rowsPerPageText: false,
// //   //     rangeSeparatorText: "dan",
// //   //     selectAllRowsItem: true,
// //   //     selectAllRowsItemText: "Barchasi",
// //   //   };

// //   return (
// //     <div className="body">
// //       <input
// //         type="text"
// //         onChange={(event) => {
// //           setSearchTerm(event.target.value);
// //         }}
// //         className="search"
// //         placeholder="Search..."
// //       />
// //       <table>
// //         <tr key={"asos"}>
// //           <th>№</th>
// //           <th>Firma nomi</th>
// //           <th>Xolati</th>
// //           <th>Yo'l uzunligi</th>
// //           <th>Boshlangan sana</th>
// //           <th>Tugatilgan sana</th>
// //           <th>Mablag'</th>
// //           <th>O'zlahtirilgan mablag'</th>
// //           <th>Davlat</th>
// //           <th>Organ</th>
// //           <th>Tashkilot</th>
// //           <th>Sana</th>
// //           <th>Ishchilar soni</th>
// //         </tr>
// //         {tablaCampeones
// //           .filter((val) => search(val))
// //           .map((comp) => {
// //             return (
// //               <tr className="" key={id++}>
// //                 <td>{id}</td>
// //                 <td>{comp.nomi}</td>
// //                 <td>{comp.statusi}</td>
// //                 <td>{comp.uzunligi}</td>
// //                 <td>{comp.boshlangan}</td>
// //                 <td>{comp.tugatiladi}</td>
// //                 <td>{comp.mablag}</td>
// //                 <td>{comp.ozlashtirilgan}</td>
// //                 <td>{comp.manbai}</td>
// //                 <td>{comp.organ}</td>
// //                 <td>{comp.pudratchi}</td>
// //                 <td>{comp.sana}</td>
// //                 <td>{comp.ishchilar}</td>
// //                 {/* <DataTable
// //                   pagination
// //                   paginationComponentOptions={paginationOptions}
// //                 /> */}
// //               </tr>
// //             );
// //           })}
// //       </table>
// //     </div>
// //   );
// // }

// // export default CreateTable;

// import React, { useState, useEffect } from "react";
// import "../styles/table-comp.css";
// import tableComponents from "../components/table-data.json";

// function reroads() {
//   let id = 1;

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectStatusState, setSelectStatusState] = useState("");

//   function search(val) {
//     {
//       if (searchTerm == "") {
//         return val;
//       } else {
//         if (val.nomi.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.statusi.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.uzunligi.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.boshlangan.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.tugatiladi.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.mablag.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.ozlashtirilgan.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.manbai.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.organ.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.pudratchi.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.sana.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//         if (val.ishchilar.toLowerCase().includes(searchTerm.toLowerCase()))
//           return val;
//       }
//     }
//   }
//   // qidiruv tizimini tugash

//   // selectni filtrlash boshlash
//   const handleSelectStatusChange = (e) => {
//     const selectStatusState = e.target.value;
//     setSelectStatusState(selectStatusState);
//     console.log("selectValue: ", selectStatusState);
//   };

//   function selectFilter(val, statusVal) {
//     if (statusVal === "barchasi" || statusVal === "") return val;
//     else if (val.statusi.toLowerCase() === statusVal) return val;
//   }
//   // selectni filtrlash tugatish

//   return (
//     <div className="body">
//       <div class="tableNav">
//         <select
//           className="selectStatus"
//           name="status"
//           onChange={handleSelectStatusChange}
//         >
//           <option value="default" selected disabled>
//             Holatni tanlang
//           </option>
//           <option value="barchasi">Barchasi</option>
//           <option value="ta'mirlanmoqda">Ta'mirlanayotgan yo'llar</option>
//           <option value="rejalashtirilmoqda">
//             Ta'mirlanishi rejalashtirilgan yo'llar
//           </option>
//           <option value="tayyor">Ta'mirlanib bo'lgan yo'llar</option>
//         </select>
//         <input
//           type="text"
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }}
//           className="searchInp"
//           placeholder="Qidiruv..."
//         />
//       </div>

//       <table>
//         <tr key={"asos"}>
//           <th sort="ars">№</th>
//           <th>Firma nomi</th>
//           <th>Xolati</th>
//           <th>Yo'l uzunligi</th>
//           <th>Boshlangan sana</th>
//           <th>Tugatilgan sana</th>
//           <th>Mablag'</th>
//           <th>O'zlahtirilgan mablag'</th>
//           <th>Davlat</th>
//           <th>Organ</th>
//           <th>Tashkilot</th>
//           <th>Sana</th>
//           <th>Ishchilar soni</th>
//         </tr>
//         {tableComponents
//           .filter((val) => selectFilter(val, selectStatusState) && search(val))
//           .map((comp) => {
//             return (
//               <tr className="" key={id++}>
//                 <td>{id}</td>
//                 <td>{comp.nomi}</td>
//                 <td>{comp.statusi}</td>
//                 <td>{comp.uzunligi}</td>
//                 <td>{comp.boshlangan}</td>
//                 <td>{comp.tugatiladi}</td>
//                 <td>{comp.mablag}</td>
//                 <td>{comp.ozlashtirilgan}</td>
//                 <td>{comp.manbai}</td>
//                 <td>{comp.organ}</td>
//                 <td>{comp.pudratchi}</td>
//                 <td>{comp.sana}</td>
//                 <td>{comp.ishchilar}</td>
//               </tr>
//             );
//           })}
//       </table>
//     </div>
//   );
// }

// export default reroads;

import React from "react";

function reroads() {
  return (
    <div>
      <h1>wrejnejvnewk</h1>
    </div>
  );
}

export default reroads;
