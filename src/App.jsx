import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export default App;
