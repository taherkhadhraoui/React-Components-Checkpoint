import "./App.css";
import FooterC from "./Footer/Footer";
import NavbarC from "./Navbar/Navbar";
import ProductList from "./ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <ProductList />
      <FooterC />
    </div>
  );
}

export default App;
