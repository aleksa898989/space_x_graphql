import { Link } from "react-router-dom";
import { GET_COMPANY } from "graphql/queries";
import { useQuery } from "@apollo/client";

const Company = () => {
  const { data, loading, error } = useQuery(GET_COMPANY, {
    fetchPolicy: "cache-first",
  });
  let company = data?.company;
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>Company details</h1>
          <h3>CEO: {company?.ceo}</h3>
          <h3>COO: {company?.coo}</h3>
          <h3>CTO: {company?.cto}</h3>
          <h3>Employees: {company?.employees}</h3>
          <h3>
            Founded: {company?.founded} by {company?.founder}
          </h3>
          <Link to="/">Go back to home</Link>
        </div>
      )}
    </>
  );
};

export default Company;
