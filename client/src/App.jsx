import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from "./pages/Success";
import { useSelector } from "react-redux";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
 } from "react-router-dom";
const App= () => {
  const user = useSelector((state) => state.user.currentUser); 
  //const user = true;
  return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
   )};

export default App;
