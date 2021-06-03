import { gql } from "@apollo/client";

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
