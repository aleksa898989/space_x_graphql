import UserItem from "./item";

const Users = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="users-wrapper">
          {users &&
            users.map((item) => {
              return <UserItem key={item.id} item={item} />;
            })}
        </div>
      )}
    </>
  );
};

export default Users;
