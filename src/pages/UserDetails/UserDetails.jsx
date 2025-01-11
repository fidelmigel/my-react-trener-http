import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserById } from "../../services/api";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const user = await fetchUserById(userId);
      setUser(user);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <nav>
        <ul>
          <li>
            <Link to="info">Info</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDetails;
