import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Table from "../src/pages/table-comp";
import TableTemplate from "./components/tabletemplate";
import NewsTemplate from "./components/newstemplate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// regions
import Tashkentcity from "./pages/regions/tashkentcity";
import Tashkentreg from "./pages/regions/tashkentreg";
import Sirdaryo from "./pages/regions/sirdaryo";
import Jizzakh from "./pages/regions/jizzakh";
import Fergana from "./pages/regions/fergana";
import Namangan from "./pages/regions/namangan";
import Andijan from "./pages/regions/andijan";
import Surkhandaryo from "./pages/regions/surkhandaryo";
import Kashkadaryo from "./pages/regions/kashkadaryo";
import Samarkand from "./pages/regions/samarkand";
import Navoi from "./pages/regions/navoi";
import Karakalpakistan from "./pages/regions/karakalpakistan";
import Khorazm from "./pages/regions/khorazm";
import Bukhoro from "./pages/regions/bukhoro";
// end regions

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/table-comp" exact component={Table} />
          <Route path="/tabletemplate" exact component={TableTemplate} />
          <Route path="/newstemplate" exact component={NewsTemplate} />
          {/* regions */}
          <Route path="/tashkentcity" exact component={Tashkentcity} />
          <Route path="/tashkentreg" exact component={Tashkentreg} />
          <Route path="/sirdaryo" exact component={Sirdaryo} />
          <Route path="/jizzakh" exact component={Jizzakh} />
          <Route path="/fergana" exact component={Fergana} />
          <Route path="/namangan" exact component={Namangan} />
          <Route path="/andijan" exact component={Andijan} />
          <Route path="/surkhandaryo" exact component={Surkhandaryo} />
          <Route path="/kashkadaryo" exact component={Kashkadaryo} />
          <Route path="/samarkand" exact component={Samarkand} />
          <Route path="/navoi" exact component={Navoi} />
          <Route path="/karakalpakistan" exact component={Karakalpakistan} />
          <Route path="/khorazm" exact component={Khorazm} />
          <Route path="/bukhoro" exact component={Bukhoro} />
          {/* end regions */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
