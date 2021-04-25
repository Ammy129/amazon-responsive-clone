import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ScrollToTop from "./components/ScrollToTop";
import DataProvider from "./Context";
import Footer from "./components/Footer";
import SingleProductDetail from "./SingleProductDetail";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:id" exact component={SingleProductDetail} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
