import Users from "./users";
import { useQuery } from "@apollo/client";
import { USERS } from "./gql";

const UsersDataContainer = () => {
  const { data, loading, error } = useQuery(USERS, {
    fetchPolicy: "cache-first",
  });
  let users = data?.users;
  return (
    <>
      <Users users={users} loading={loading} />
    </>
  );
};

export default UsersDataContainer;
