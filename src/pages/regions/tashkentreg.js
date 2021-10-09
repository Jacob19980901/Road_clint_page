import React from "react";
import "../../styles/regions.css";

function tashkentreg() {
  return (
    <div className="regions">
      <div className="map tashhent">
        <h1>Toshkent viloyati</h1>
        {/* map */}

        <iframe
          title="tashhentreg"
          zoom="none"
          src="https://yandex.com/map-widget/v1/?um=constructor%3A51971f357ad9626e079b63597233d47f1d89654c4293c503f23b20c0ee0316a8&amp;source=constructor"
          width="100%"
          height="800"
          frameborder="0"
        ></iframe>

        {/* map */}

        <div className="marks">
          <p className="plan">rejalashtirilayotgan</p>
          <p className="roat">ta'mirlanayotgan</p>
          <p className="complated">tugatilgan</p>
        </div>
      </div>
    </div>
  );
}

export default tashkentreg;
