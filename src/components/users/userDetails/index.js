import { Redirect, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_USER, USERS } from "../gql";
import { useState } from "react";

const UserDetails = () => {
  const { state } = useLocation();
  const [deleteUser, { loading, called }] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: USERS,
        variables: { where: { id: { _eq: state.id } } },
      },
    ],
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) return <Redirect to={"/users"} />;
  return (
    <>
      <div className="user-details">
        <h4> Name: {state?.name}</h4>
        <h4> Rocket: {state?.rocket}</h4>
        <h4> Time: {state?.timestamp}</h4>
        <h4>Twitter: {state?.twitter}</h4>
        <button
          onClick={() => {
            deleteUser({
              variables: { where: { id: { _eq: state.id } } },
            }).then(() => {
              setTimeout(() => {
                setShouldRedirect(true);
              }, [3000]);
            });
          }}
          loading={loading}
          disabled={loading}
        >
          {loading ? "Loading" : "Delete this user"}
        </button>
      </div>
    </>
  );
};

export default UserDetails;
