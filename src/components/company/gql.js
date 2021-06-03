import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query {
    company {
      ceo
      coo
      cto_propulsion
      cto
      employees
      founded
      founder
    }
  }
`;
