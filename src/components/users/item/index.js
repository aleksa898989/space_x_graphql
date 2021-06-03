import { Link } from "react-router-dom";

const UserItem = ({ item }) => {
  return (
    <>
      <Link to={{ pathname: "/user-details", state: item }}>
        <div className="user-item">
          <h4> Name: {item?.name}</h4>
          <h4> Rocket: {item?.rocket}</h4>
          <h4> Time: {item?.timestamp}</h4>
          <h4>Twitter: {item?.twitter}</h4>
        </div>
      </Link>
    </>
  );
};

export default UserItem;
