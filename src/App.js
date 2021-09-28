import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SellerInfo from "./pages/SellerInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seller_info" component={SellerInfo} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
