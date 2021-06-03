import { Switch, Route } from "react-router-dom";
import Company from "components/company";
import Home from "components/home";
import Users from "components/users";
import UserDetails from "components/users/userDetails";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/company"} exact component={Company} />
        <Route path={"/users"} exact component={Users} />
        <Route path={"/user-details"} exact component={UserDetails} />
      </Switch>
    </>
  );
};

export default Pages;
