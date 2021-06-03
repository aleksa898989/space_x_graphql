import Company from "./company";
import { GET_COMPANY } from "./gql";
import { useQuery } from "@apollo/client";

const CompanyDataContainer = () => {
  const { data, loading, error } = useQuery(GET_COMPANY, {
    fetchPolicy: "cache-first",
  });
  let company = data?.company;
  return (
    <>
      <Company company={company} loading={loading} />
    </>
  );
};

export default CompanyDataContainer;
