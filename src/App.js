import { ApolloProvider } from "@apollo/client";
import { client } from "graphql/apolloClient";
import Pages from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.scss";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Pages />
      </Router>
    </ApolloProvider>
  );
};

export default App;
