import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20rem" }}>
      <Link to="/company">
        <h4>Company</h4>
      </Link>
      <br />
      <Link to="/users">
        <h4>Users</h4>
      </Link>
    </div>
  );
};

export default Home;
