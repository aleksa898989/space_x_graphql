import { useCallback, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_USER, USERS } from "graphql/queries";

const UserDetails = () => {
  const { state } = useLocation();

  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: USERS,
        variables: { where: { id: { _eq: state.id } } },
      },
    ],
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleDeleteUser = useCallback(() => {
    deleteUser({
      variables: { where: { id: { _eq: state.id } } },
    }).then(() => {
      setTimeout(() => {
        setShouldRedirect(true);
      }, [3000]);
    });
  }, [deleteUser, state.id]);

  if (shouldRedirect) return <Redirect to={"/users"} />;

  return (
    <div className="user-details">
      {Object.keys(state).map((item) => {
        return <h4>{`${item.toUpperCase()}: ${state[item]}`}</h4>;
      })}

      <button onClick={handleDeleteUser} loading={loading} disabled={loading}>
        {loading ? "Loading" : "Delete this user"}
      </button>
    </div>
  );
};

export default UserDetails;
