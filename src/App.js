import { AppProvider } from "@shopify/polaris";
// import "./App.css";
import FetchData from "./COMPONENTS/FetchData";
// import RandomColor from './COMPONENTS/RandomColor';

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <RandomColor/> */}
        <FetchData />
      </div>
    </AppProvider>
  );
}

export default App;
