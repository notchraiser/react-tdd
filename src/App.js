import "./App.scss";
import Nav from "./component/nav/Nav";
import Headline from "./component/headline/index";

function App() {
  return (
    <div>
      <Nav />
      <section className="main">
        <Headline header='Delhi' desc='This posts is related to Delhi NCR.'/>
      </section>
    </div>
  );
}

export default App;
