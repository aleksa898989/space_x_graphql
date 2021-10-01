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
export const USERS = gql`
  query {
    users {
      id
      name
      rocket
      timestamp
      twitter
    }
  }
`;

export const DELETE_USER = gql`
  mutation delete_users($where: users_bool_exp!) {
    delete_users(where: $where) {
      affected_rows
    }
  }
`;
