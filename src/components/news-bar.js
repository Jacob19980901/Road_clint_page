import "../styles/news-bar.css";
import data from "./table-data.json";
import imgs from "../assets/not-found.png";

function News1(props) {
  const imgs = props.table.image;
  return (
    <div className="news1">
      <img src={imgs} />
      {console.log("IMG: ", imgs)}
      <h2>Yo'l {props.table.statusi.toLowerCase()}</h2>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
      <a href="../newstemplate">Batafsil...</a>
    </div>
  );
}

function NewsBar() {
  return (
    <div className="newsBarBody">
      <div className="newsContainer">
        <h1>Yangiliklar</h1>
        <div className="news">
          <News1 table={data[data.length - 1]} />
          <News1 table={data[data.length - 2]} />
          <News1 table={data[data.length - 4]} />
        </div>
      </div>
    </div>
  );
}

export default NewsBar;
