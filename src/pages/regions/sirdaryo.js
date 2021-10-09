import React from "react";
import "../../styles/regions.css";

function sirdaryo() {
  return (
    <div className="regions">
      <div className="map sirdaryo">
        <h1>Sirdaryo</h1>
        {/* map */}

        <iframe
          title="sirdaryo"
          src="https://yandex.com/map-widget/v1/?um=constructor%3Add440d67b6347ea50c80ff93bfb5dff8205e678a756d49a3d80f7dd737e0a7da&amp;source=constructor"
          width="692"
          height="700"
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

export default sirdaryo;
