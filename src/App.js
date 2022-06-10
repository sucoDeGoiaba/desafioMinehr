import Header from "./components/Header/Header.jsx";
import './App.css'
import TitleSection from "./components/TitleSection/TitleSection.jsx";
import BarsGraph from "./components/Graphics/BarsGraph.jsx";
import ScatterGraph from "./components/Graphics/ScatterGraph.jsx";
import GraphicSection from "./components/GraphicSection/GraphicSection.jsx";
function App() {
  return (
    <>
      <Header/>
      <main>
        <TitleSection/>
        <GraphicSection>
          <BarsGraph/>
          <ScatterGraph/>
        </GraphicSection>
      </main>
    </>
  )
}

export default App;
