import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USERS } from "../../graphql/queries";

const Users = () => {
  const { data, loading, error } = useQuery(USERS, {
    fetchPolicy: "cache-first",
  });

  let users = data?.users;
  if (error) return `${error}`;

  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="users-wrapper">
      {users &&
        users.map((item) => {
          return (
            <>
              <Link to={{ pathname: "/user-details", state: item }}>
                <div className="user-item">
                  <h4> Name: {item?.name}</h4>
                  <h4> Rocket: {item?.rocket}</h4>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Users;
