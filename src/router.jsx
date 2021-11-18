import { Switch, Route } from "react-router-dom";
import Company from "components/Company";
import Home from "components/Home";
import Users from "components/users/Listing";
import UserDetails from "components/users/Details";

const Pages = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/company"} exact component={Company} />
      <Route path={"/users"} exact component={Users} />
      <Route path={"/user-details"} exact component={UserDetails} />
    </Switch>
  );
};

export default Pages;
