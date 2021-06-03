import { useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_USER, USERS } from "../gql";

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
            });
          }}
          loading={loading}
          disabled={loading}
        >
          Delete this user
        </button>
      </div>
    </>
  );
};

export default UserDetails;
